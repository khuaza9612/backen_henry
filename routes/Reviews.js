const { Router } = require('express');
const router = Router();
const { postReview,getReview } = require('../controller/reviewcontroller.js');

router.get('/review', getReview);
router.post('/product/review/:id', postReview);



module.exports = router;