// server/routes/cart.js
const express = require('express');
const router = express.Router();
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');

// Cart management routes
router.get('/', getCart);
router.post('/add', addToCart);
router.delete('/remove/:id', removeFromCart);

module.exports = router; // Export the router
