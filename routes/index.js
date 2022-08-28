const { Router } = require('express');
const router = Router();
const verifyToken = require('../middlewares/authenticate');


router.use(require('./User.js'));
router.use(require('./Auth.js'));
router.use(require('./Product'));
router.use(require('./product.js'));

module.exports = router;
