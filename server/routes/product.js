// server/routes/product.js
const express = require('express');
const router = express.Router();
const { getProducts, getProductById } = require('../controllers/productController');

// Product listing and detail routes
router.get('/', getProducts);
router.get('/:id', getProductById);

module.exports = router; // Export the router
