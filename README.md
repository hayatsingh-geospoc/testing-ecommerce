# MERN E-Commerce Application

This is a modern e-commerce application built using the MERN stack (MongoDB, Express.js, React, Node.js). The application features user authentication, product listing, cart management, payment integration, and order tracking.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Database Models](#database-models)
- [Middleware](#middleware)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login with JWT authentication
- Product listing with filtering and sorting options
- Cart management (add, remove, update items)
- Order creation and order history tracking
- Payment integration with Stripe or PayPal
- Responsive design for mobile and desktop

## Technologies Used

- **Frontend**: React, React Router, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Processing**: Stripe or PayPal
- **Styling**: CSS, Bootstrap or Tailwind CSS (optional)

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/testing-ecommerce.git
   cd testing-ecommerce
# testing-ecommerce


Set up the backend:

Navigate to the server directory:
Bash
Insert in terminal

cd server
Install dependencies:
Bash
Insert in terminal

npm install
Create a .env file in the server directory and add your environment variables:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key (if using Stripe)
Set up the frontend:

Navigate to the client directory:
Bash
Insert in terminal

cd ../client
Install dependencies:
Bash
Insert in terminal

npm install
Usage
Start the backend server:

Navigate back to the server directory and run:
Bash
Insert in terminal

npm start
Start the frontend application:

Navigate back to the client directory and run:
Bash
Insert in terminal

npm start
Open your browser and go to http://localhost:3000 to view the application.

API Endpoints
User Routes
POST /api/users/register - Register a new user
POST /api/users/login - Login a user
Product Routes
GET /api/products - Get all products
GET /api/products/:id - Get product by ID
Cart Routes
GET /api/cart - Get user's cart
POST /api/cart/add - Add item to cart
DELETE /api/cart/remove/:id - Remove item from cart
Order Routes
POST /api/orders - Create a new order
GET /api/orders/history - Get order history
Database Models
User Model
name: String
email: String (unique)
password: String (hashed)
isAdmin: Boolean (default: false)
Product Model
name: String
image: String
description: String
price: Number
countInStock: Number
Order Model
user: ObjectId (reference to User)
orderItems: Array of objects (product and quantity)
paymentMethod: String
totalPrice: Number
isPaid: Boolean (default: false)
paidAt: Date
Cart Model
user: ObjectId (reference to User)
items: Array of objects (product and quantity)
