const { Router } = require('express');
const router = Router();
const { postReview } = require('../controller/reviewcontroller.js');


router.post('/product/review/:id', postReview);

module.exports = router;