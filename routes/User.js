const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const router = Router();
const {getalluser,getUser,deleteUser,postUser,putUser,
    olvidePassword,nuevoPassword,comprobarToken
}=require('../controller/usercontroller.js');

const{crearOrdem,notificacionOrden}=require('../controller/mercadopago.js');
const verifyToken=require('../middlewares/authenticate');
const verifyToken2=require('../middlewares/authenticate');


// route to get all the users
router.get('/user',verifyToken.ensureAuth,getalluser);
// route to get one user
router.get('/user/:id',verifyToken.ensureAuth,getUser);
// route to delete a user
router.delete('/user/:id',verifyToken.ensureAuth,deleteUser);
// route to create a user
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

router.post("/olvide-password", olvidePassword);
router.get("/olvide-password/:clave", comprobarToken);

router.post("/olvide-passwords", nuevoPassword);

//------------------MERCADE PAGO------------------
router.post('/crear-orden',crearOrdem);
router.get('/mercadopago',notificacionOrden);







module.exports = router;
