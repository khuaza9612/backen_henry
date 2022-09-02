const { Router } = require('express');
const router = Router();
const { getBill,
        getBillById,
        putBill,
        postBill } = require('../controller/billcontroller');


router.get('/bill', getBill);
router.get('/bill/:id', getBillById);
router.put('/bill/:id', putBill);
router.post('/bill', postBill);

module.exports = router;