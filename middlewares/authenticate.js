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
const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.rol)) {
      return next(new AppError('No tienes permisos para realizar esta acción', 403));
    }
    next();
  };
};
module.exports = {
  ensureAuth,restrictTo

};
