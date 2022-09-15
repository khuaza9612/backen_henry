const { Router } = require('express');
const router = Router();
const { 
    getBill,
    postbill,
    getBillById,
    putBill
} = require('../controller/billcontroller');


router.get('/bill', getBill);
router.get('/bill/:id', getBillById);
router.put('/bill/:id', putBill);
router.post('/bill', postbill);

module.exports = router;