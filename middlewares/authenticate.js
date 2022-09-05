const jwt= require('jsonwebtoken');

const { JWT_SECRET, JWT_EXPIRES_IN } = require('../config/env-vars');




   const ensureAuth = async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }
    if (!token) {
      return next('No se ha encontrado el token', 401);
    }
    next();

};
const restrictTo = (roles) => async (req, res, next) => {
  const token=req.headers.authorization.split(' ')[1];
  const tokenData=await jwt.verify(token,JWT_SECRET);
  if(!roles.includes(tokenData.rol)){
    return next('No tienes permisos para acceder a este recurso',403);
  }else{
    return next('No tienes permisos para acceder a este recurso',403);
  }
 
  
};


module.exports = {
  ensureAuth,restrictTo

};
