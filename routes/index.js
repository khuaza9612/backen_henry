const { Router } = require('express');
const router = Router();
const verifyToken = require('../middlewares/authenticate');


router.use(require('./User.js'));
router.use(require('./Auth.js'));
router.use(require('./product.js'));
router.use(require('./Bills.js'));
router.use(require('./Orders.js'));

module.exports = router;
