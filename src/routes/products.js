const express = require('express');

const router = express.Router();

const productsController = require('../controllers/ProductsController');

router.get('/', productsController.getAll);

router.get('/:id', productsController.getById);

router.post('/', productsController.create);

router.delete('/:id', productsController.delete);

router.put('/:id', productsController.update);

module.exports = router;