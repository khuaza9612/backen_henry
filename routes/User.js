const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const router = Router();
const {getalluser,getUser,deleteUser}=require('../controller/usercontroller.js');

const verifyToken=require('../middlewares/authenticate');


router.get('/user',getalluser);
router.get('/user/:id',getUser);
router.delete('/user/:id',deleteUser);

router.delete('/user/:id', async (req, res) => {
  const user = await User.destroy({ where: { id: req.params.id } });
  res.json("eliminado correctamente" + user);
  
});
router.post('/user', async (req, res) => {
  
    const { nombre, apellidos, email, password, confirmarPassword, foto } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    // } else if (!comparePass(password, confirmarPassword)) {
    //   return res.status(400).json({ msg: 'Las contraseñas no coinciden' });
    }
    const newUser = await User.create(req.body);
    return res.json(newUser);   
  });




module.exports = router;
