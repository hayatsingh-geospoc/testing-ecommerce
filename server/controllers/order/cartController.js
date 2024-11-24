// server/controllers/cartController.js
const Cart = require('../models/Cart');

// Get user's cart
const getCart = async (req, res) => {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.product');
    res.json(cart);
};

// Add item to cart
const addToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    const cart = await Cart.findOneAndUpdate(
        { user: req.user.id },
        { $addToSet: { items: { product: productId, quantity } } },
        { new: true, upsert: true }
    );
    res.json(cart);
};

// Remove item from cart
const removeFromCart = async (req, res) => {
    const cart = await Cart.findOneAndUpdate(
        { user: req.user.id },
        { $pull: { items: { product: req.params.id } } },
        { new: true }
    );
    res.json(cart);
};

module.exports = { getCart, addToCart, removeFromCart };
