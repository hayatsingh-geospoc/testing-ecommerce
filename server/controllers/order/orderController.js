// server/controllers/orderController.js
const Order = require('../models/Order');

// Create a new order
const createOrder = async (req, res) => {
    const { orderItems, paymentMethod, totalPrice } = req.body;
    const order = new Order({
        user: req.user.id,
        orderItems,
        paymentMethod,
        totalPrice,
    });
    await order.save();
    res.status(201).json(order);
};

// Get order history
const getOrderHistory = async (req, res) => {
    const orders = await Order.find({ user: req.user.id });
    res.json(orders);
};

module.exports = { createOrder, getOrderHistory };
