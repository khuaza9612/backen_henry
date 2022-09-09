const { Router } = require('express');
const router = Router();
const { postReview } = require('../controller/reviewcontroller.js');


router.post('/product/review', postReview);

module.exports = router;