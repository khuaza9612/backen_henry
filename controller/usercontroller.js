const User = require('../models/User');
const { Router } = require('express');
 const getalluser=async(req,res)=>{
    const user = await User.findAll();
    res.json(user);
}
 const getUser = async (req, res, next) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (!id || !user) {
      return next(new AppError('No se ha especificado el id o Usuario no econtrado', 400));
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
    const { nombre, apellidos, email, password, confirmarPassword } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) {
    return next(new AppError('El usario ya existe', 400));
  } else if (!comparePass(password, confirmarPassword)) {
    return next(new AppError('Las contraseñas no coinciden', 400));
  }

  const newUser = await User.create({
    nombre,
    apellidos,
    email,
    password,
    confirmarPassword,
    foto: req.file.filename
  });

  return createSendToken(newUser, 201, res);

};
   
const putUser = async (req, res, next) => {
    const { id } = req.params;
    const { nombre, apellidos, email, password, confirmarPassword,rol } = req.body;
    try{
    await User.update({
        nombre,
        apellidos,
        email,
        password,
        confirmarPassword,
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