const {User} = require('../db.js');
const { Router } = require('express');
const sequelize = require('../db');
const {createSendToken}=require('./authcontroller')


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
    const {name,lastName,email,image,password,passConfirmation,rol} = req.body;
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
    rol
  });

  return createSendToken(newUser, 201, res);

};
   
const putUser = async (req, res, next) => {
  const { id } = req.params;
  const {name,lastName,email,image,password,passConfirmation,rol} = req.body;
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







   



  module.exports={
    getalluser,
    getUser,
    deleteUser,
    postUser,
    putUser
    };