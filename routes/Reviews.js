const { Router } = require('express');
const router = Router();
const { postReview,getReview,getReviewById } = require('../controller/reviewcontroller.js');

router.get('/review', getReview);
router.post('/product/review/:id', postReview);
router.get('/review/:id', getReviewById);



module.exports = router;