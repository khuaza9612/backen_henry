const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const router = Router();
const {getalluser, getUser, deleteUser, postUser, putUser} = require('../controller/usercontroller.js');

const verifyToken = require('../middlewares/authenticate');
const verifyToken2 = require('../middlewares/authenticate');


// route to get all the users
router.get('/user',verifyToken.ensureAuth,getalluser);
// route to get one user
router.get('/user/:id',verifyToken.ensureAuth,getUser);
// route to delete a user
router.delete('/user/:id',verifyToken.ensureAuth,deleteUser);
// route to create a user
// ruta para obtener todos los usuarios    *
router.get('/user',verifyToken.ensureAuth,verifyToken2.restrictTo('admin'),getalluser);
// ruta para obtener un usuario *
router.get('/user/:id',verifyToken.ensureAuth,verifyToken2.restrictTo('admin'),getUser);
// ruta para eliminar un usuario*
router.delete('/user/:id',verifyToken.ensureAuth,verifyToken2.restrictTo('admin'),deleteUser);
// ruta para crear un usuario *
router.post('/user',postUser);
// CAMBIAR ROL DE USUARIO
router.put('/user/:id',verifyToken.ensureAuth,verifyToken2.restrictTo('admin'),putUser);





module.exports = router;
