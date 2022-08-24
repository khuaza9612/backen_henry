const { Router } = require('express');
const router = Router();



router.use(require('./User.js'));
router.use(require('./Auth.js'));

module.exports = router;
