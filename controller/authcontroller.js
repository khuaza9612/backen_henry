const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Cliente = require('../models/User.js');

const router = Router();

const login=async(req,res)=>{

  try {
    const client = await Cliente.findOne({ where: { email: req.body.email } });
    if (!client) return res.status(401).json('Credenciales inválidas');

    console.log(client);

    const encryptedPw = bcrypt.compareSync(req.body.password, client.password);

    const {  id, email , rol } = client;

    if (encryptedPw) {
      const token = jwt.sign(
        {
          id,
          email,
          password: req.body.password,
          rol
        },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );
      return res.status(200).json({ id,email, token, rol });
    } else {
      return res.status(401).json('Credenciales inválidas');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports={
    login
    };
