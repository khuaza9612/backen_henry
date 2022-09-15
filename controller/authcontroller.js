const {User} = require('../db.js');
const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const sequelize = require('../db');;

const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/env-vars');

const router = Router();

const signToken = (id,rol) => {
  return jwt.sign({ id,rol }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};
const validatePassword = async (password, userPassword) => {
  return await bcrypt.compare(password, userPassword);
};

 
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id,user.rol);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

 

  if (!user) return res.status(401).json({ msg: 'User not found' });

    const correct = await validatePassword(password,user.password);



  if (!user || !correct) {
    return res.status(401).json({ msg: 'invalid credentials' });
  }

  if(user.isBlocked === true){
    return res.status(401).json( {msg: 'User is blocked'}) 
   }

  createSendToken(user, 200, res);
};



 module.exports={
   login,
   createSendToken
    };
