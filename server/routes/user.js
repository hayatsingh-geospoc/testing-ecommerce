// server/routes/user.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

// User registration and login routes
router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router; // Export the router
