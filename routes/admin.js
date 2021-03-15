const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

router.get('/admin', productsController.getAdmin);

router.post('/admin', productsController.postAdmin);

module.exports = router;