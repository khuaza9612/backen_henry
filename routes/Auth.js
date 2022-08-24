const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const router = Router();
const {login}=require('../controller/authcontroller.js');

const verifyToken=require('../middlewares/authenticate.js');

router.post('/login',login);
module.exports = router;
