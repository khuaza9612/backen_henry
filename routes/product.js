const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const router = Router();
const {getproducts,
    getproduct,
    deleteproduct,
    postproduct,
    putproduct,
    productname}=require('../controller/productscontroller.js');

const verifyToken=require('../middlewares/authenticate');
const verifyToken2=require('../middlewares/authenticate');

    
router.get('/product',getproducts);//obtener todos los productos *
router.get('/product/:id',getproduct);//obtener un producto por id *
router.delete('/product/:id',verifyToken.ensureAuth,verifyToken2.restrictTo('admin'),deleteproduct);    //eliminar un producto por id*
router.post('/product',verifyToken.ensureAuth,verifyToken2.restrictTo('admin'),postproduct);//crear un producto*
router.put('/product/:id',verifyToken.ensureAuth,verifyToken2.restrictTo('admin'),putproduct);//actualizar un producto por id*
router.get('/products',productname);//obtener productos por nombre*

module.exports = router;