const { Router } = require('express');
const router = Router();
const verifyToken=require('../middlewares/authenticate');



router.use(require('./User.js'));
router.use(require('./Auth.js'));

module.exports = router;
