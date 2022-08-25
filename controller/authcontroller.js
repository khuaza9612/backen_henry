const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User.js');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/env-vars');

const router = Router();

// const login=async(req,res)=>{

//   try {
//     const client = await Cliente.findOne({ where: { email: req.body.email } });
//     if (!client) return res.status(401).json('Credenciales inválidas');

//     console.log(client);

//     const encryptedPw = bcrypt.compareSync(req.body.password, client.password);

//     const {  id, email , rol } = client;

//     if (encryptedPw) {
//       const token = jwt.sign(
//         {
//           id,
//           email,
//           password: req.body.password,
//           rol
//         },
//         process.env.JWT_SECRET,
//         { expiresIn: '1d' }
//       );
//       return res.status(200).json({ id,email, token, rol });
//     } else {
//       return res.status(401).json('Credenciales inválidas');
//     }
//   } catch (error) {
//     res.status(500).json(error);
//   }
// };

// module.exports={
//     login
//     };


const signToken = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
};
const validatePassword = async (password, userPassword) => {
  return await bcrypt.compare(password, userPassword);
};

 const comparePass = (a, b) => {
  if (a === b) {
    return true;
  }
  return false;
};
const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

 const login = (async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  const correct = await validatePassword(password, user.password);

  if (!user || !correct) {
    return next('Email o contraseña incorrecta', 401);
  }

  createSendToken(user, 200, res);
});
 module.exports={
   login
    };

//  