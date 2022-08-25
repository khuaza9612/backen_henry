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

    
router.get('/product',getproducts);
router.get('/product/:id',getproduct);
router.delete('/product/:id',deleteproduct);
router.post('/product',postproduct);
router.put('/product/:id',putproduct);
router.get('/productname/:name',productname);

module.exports = router;