const jwt= require('jsonwebtoken');
const JWT_SECRET = '23k4!jhisd&jhf8*asfdasdf$dsf45%&t';

 const ensureAuth = async (req, res, next) => {
  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return res.status(401).json({ msg: 'No tienes permisos para esta acción' });
  }
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    req.user = { id };
    next();
  } catch (error) {
    return res.status(401).json({ msg: 'No tienes permisos para esta acción' });
  }
};
module.exports = {
  ensureAuth,

};
