const express = require('express');

const router = express.Router();

const vendorsController = require('../controllers/PromotionController');

router.get('/', vendorsController.get);

router.delete('/', vendorsController.delete);

module.exports = router;