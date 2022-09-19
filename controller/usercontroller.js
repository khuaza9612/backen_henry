const {User} = require('../db.js');
const { Router } = require('express');
const sequelize = require('../db');
const {createSendToken}=require('./authcontroller')
const {sendEmail,emailOlvidePassword}=require('../utils/email.js');
const generarTokenID=require('../utils/generarTokenUser.js');
const {bcrypt} = require("bcrypt");
const { comparePassword, hashPassword } = require("../utils/hashPassword.js");



const getalluser=async(req,res)=>{
  const user = await User.findAll();
  res.json(user);
};

const getUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!id || !user) {
    return next ('No se ha especificado el id o Usuario no econtrado', 400);
  };
  res.status(200).json(user);
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!id || !user) {
    return res.status(400).json({msg:'No se ha especificado el id o Usuario no econtrado'});
  };
  await user.destroy();
  res.status(200).json({ msg: 'Usuario eliminado' });
};

const postUser = async (req, res, next) => {
  const {
    name,
    lastName,
    email,
    image,
    password,
    passConfirmation,
    rol,
    clave,
    isBlocked
  } = req.body;
  const user = await User.findOne({ where: { email } });
  const comparePass = (a, b) => {
    if (a === b) {
      return true;
    };
    return false;
  };
  if (user) {
    return next ('El usario ya existe', 400);
  } else if (!comparePass(password, passConfirmation)) {
    return next('Las contraseñas no coinciden', 400);
  }
  const beforeCreate= async(user) => {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    user.passConfirmation = user.password;
  };

  const newUser = await User.create({
    name,
    lastName,
    email,
    password,
    passConfirmation,
    image,
    rol,
    clave: generarTokenID(),
    isBlocked:"false"
  });
  const createdUser = newUser.dataValues;

  sendEmail({
      name: newUser.nombre,
      email: newUser.email,
    });
  return createSendToken(newUser, 201, res);
};
   
const putUser = async (req, res, next) => {
  const { id } = req.params;
  const { name, lastName, rol,isBlocked,image } = req.body;

  
  try{
  await User.update({
  
    rol,isBlocked,name,lastName,image
    },
    {
      where: { id }
    });
    res.status(200).json({msg:'Usuario actualizado'});
  } catch(error) {
    next(error);
  };
};

const olvidePassword = async (req, res) => {
  const { email } = req.body;
  const mail = email;

  const userExists = await User.findOne({
    where: { email },
  });

  if (!userExists) {
    return res.status(400).json({ msg: `El usuario con el mail ${email} no existe` });
  };

  try {
    userExists.clave = generarTokenID();
    await userExists.save();

    emailOlvidePassword({
      email: userExists.email,
      name: userExists.nombre,
      clave: userExists.clave,
      id: userExists.id,
    });

    return res.json({
      msg: `Hemos enviado un email a ${userExists.mail} con las instrucciones`,
    });
  } catch (error) {
    console.log(error);
  };
};

const comprobarToken = async (req, res) => {
  const { clave } = req.params;
  const userToken = await User.findOne({
    where: { clave },
  });

  if (userToken) {
    res.json({ claveValid: true, msg: "Token valido" });
  } else {
    const error = new Error("El token solicitado no es valido");
    return res.status(404).json({ msg: error.message });
  };
};

const nuevoPassword = async (req, res) => {
  const { clave } = req.body;
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ msg:"Contraseña solicitada no ingresada" });
  };

  const user = await User.findOne({
    where: { clave },
  });

  if (user) {
    user.password = await hashPassword(password);
    user.clave = "";
    try {
      await user.save();
      return res.json({ msg: "Contraseña cambiada correctamente" });
    } catch (error) {
      console.log(error);
    };
  } else {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  };
};

module.exports = {
  getalluser,
  getUser,
  deleteUser,
  postUser,
  putUser,
  olvidePassword,
  nuevoPassword,
  comprobarToken,
};