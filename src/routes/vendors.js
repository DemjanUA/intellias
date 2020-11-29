const express = require('express');

const router = express.Router();

const vendorsController = require('../controllers/VendorsController');

router.get('/', vendorsController.getAll);

router.post('/', vendorsController.create);

router.delete('/:name', vendorsController.delete);

module.exports = router;