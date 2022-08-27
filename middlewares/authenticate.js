const jwt= require('jsonwebtoken');
const JWT_SECRET = '23k4!jhisd&jhf8*asfdasdf$dsf45%&t';


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
const restrictTo = (req, res, nex) => {
  if (req.user.id === req.params.id||req.user.rol === 'admin') {
    return res.status(401).json({ msg: 'No tienes permisos para realizar esta acción' });
  }
  next(); // si es admin, seguir
};
module.exports = {
  ensureAuth,restrictTo

};
