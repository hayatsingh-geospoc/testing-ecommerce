// server/controllers/productController.js
const Product = require('../models/Product');

// Get all products
const getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

// Get product by ID
const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
};

module.exports = { getProducts, getProductById };
