const User = require('../models/User');

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

  module.exports={
    getalluser,
    getUser,
    deleteUser
    };