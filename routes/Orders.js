const { Router } = require('express');
const router = Router();
const { 
    postOrder, 
    getOrderById, 
    getOrder, 
    putOrder,
    getOrderUserIds
} = require('../controller/ordercontroller');

router.get('/order', getOrder);
router.get('/order/:id', getOrderById);
router.get('/order/user/:id', getOrderUserIds);
router.put('/order/:id', putOrder);
router.post('/order', postOrder);

module.exports = router;