// server/routes/order.js
const express = require('express');
const router = express.Router();
const { createOrder, getOrderHistory } = require('../controllers/order/orderController');

// Order management routes
router.post('/', createOrder);
router.get('/history', getOrderHistory);

module.exports = router; // Export the router
