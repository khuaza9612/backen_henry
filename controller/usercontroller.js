const {User} = require('../db.js');
const { Router } = require('express');
const sequelize = require('../db');
const {createSendToken}=require('./authcontroller')
const {sendEmail,emailOlvidePassword}=require('../utils/email.js');
const generarTokenID=require('../utils/generarTokenUser.js');



 const getalluser=async(req,res)=>{
    const user = await User.findAll();
    res.json(user);
}
 const getUser = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!id || !user) {
      return next ('No se ha especificado el id o Usuario no econtrado', 400);
    }
    res.status(200).json(user);
  };

 const deleteUser = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!id || !user) {
      return res.status(400).json({msg:'No se ha especificado el id o Usuario no econtrado'});
    }
    await user.destroy();
    res.status(200).json({ msg: 'Usuario eliminado' });
  }
  const postUser = async (req, res, next) => {
    const {name,lastName,email,image,password,passConfirmation,rol,clave} = req.body;
  const user = await User.findOne({ where: { email } });
  const comparePass = (a, b) => {
    if (a === b) {
      return true;
    }
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
    user.passConfirmation = user.password;}
    

  const newUser = await User.create({
    name,
    lastName,
    email,
    password,
    passConfirmation,
    image,
    rol,
    clave: generarTokenID(),
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
  const {name,lastName,email,image,password,passConfirmation,clave} = req.body;
  try{
  await User.update({
    name,
    lastName,
    email,
    password,
    passConfirmation,
    image,
    rol
  },{where:{id}});
  res.status(200).json({msg:'Usuario actualizado'});
  }catch(error){
      next(error);
  }
};

const olvidePassword = async (req, res) => {
  const { email } = req.body;

  const userExists = await User.findOne({
    where: { email },
  });

  if (!userExists) {
    const error = new Error(`El usuario con el mail ${email} no existe`);
    return res.status(400).json({ msg: error.message });
  }

  try {
    userExists.clave = generarTokenID();
    await userExists.save();

    emailOlvidePassword({
      email: userExists.email,
      name: userExists.nombre,
      clave: userExists.clave,
    });

    return res.json({
      msg: `Hemos enviado un email a ${userExists.mail} con las instrucciones`,
    });
  } catch (error) {
    console.log(error);
  }
};
const nuevoPassword = async (req, res) => {
  const { clave } = req.params;
  const { password } = req.body;

  if (!password) {
    const error = new Error("Contraseña solicitada no ingresada");
    return res.status(400).json({ msg: error.message });
  }

  const user = await User.findOne({
    where: { clave },
  });

  if (user) {
    user.password = await beforeCreate(password);
    user.clave = "";
    try {
      await user.save();
      return res.json({ msg: "Contraseña cambiada correctamente" });
    } catch (error) {
      console.log(error);
    }
  } else {
    const error = new Error("Token no valido");
    return res.status(404).json({ msg: error.message });
  }
};
  module.exports={
    getalluser,
    getUser,
    deleteUser,
    postUser,
    putUser,
    olvidePassword,
    nuevoPassword
    };