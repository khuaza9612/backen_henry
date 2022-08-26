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

    
router.get('/product',getproducts);//obtener todos los productos *
router.get('/product/:id',getproduct);//obtener un producto por id *
router.delete('/product/:id',deleteproduct);    //eliminar un producto por id*
router.post('/product',postproduct);//crear un producto*
router.put('/product/:id',putproduct);//actualizar un producto por id*
router.get('/products',productname);// verificar

module.exports = router;