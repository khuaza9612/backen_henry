const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const router = Router();
const {getalluser,getUser,deleteUser,postUser,putUser,
   // olvidePassword,nuevoPassword,comprobarToken
}=require('../controller/usercontroller.js');

const verifyToken=require('../middlewares/authenticate');
const verifyToken2=require('../middlewares/authenticate');


// ruta para obtener todos los usuarios    *
router.get('/user',verifyToken.ensureAuth,getalluser);
// ruta para obtener un usuario *
router.get('/user/:id',verifyToken.ensureAuth,getUser);
// ruta para eliminar un usuario*
router.delete('/user/:id',verifyToken.ensureAuth,deleteUser);
// ruta para crear un usuario *
router.post('/user',postUser) 
// CAMBIAR ROL DE USUARIO
router.put('/user/:id',verifyToken.ensureAuth,putUser);

// router.post("/olvide-password", olvidePassword);
// router.get("/olvide-password/:clave", comprobarToken);

// router.post("/olvide-password/:clave", nuevoPassword);





module.exports = router;
