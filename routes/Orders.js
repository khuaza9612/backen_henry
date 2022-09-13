const { Router } = require('express');
const router = Router();
const { postOrder } = require('../controller/ordercontroller');

router.post('/product/order', postOrder);

module.exports = router;