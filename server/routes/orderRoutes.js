const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const orderController = require('../controllers/orderController');


const router = express.Router();

// Retrieves all orders, potentially needs authentication and admin role
router.get('/orders', authenticateToken, orderController.getAllOrders);

// Retrieve details of a specific order, requires authentication
router.get('/orders/:id', authenticateToken, orderController.getOrderById);

// Create a new order, requires authentication
router.post('/orders', authenticateToken, orderController.createOrder);

// Update an order, requires authentication and possibly checks for order status
router.put('/orders/:id', authenticateToken, orderController.updateOrder);

// Freeze an order due to insufficient funds, requires authentication and admin role
router.put('/orders/:id/freeze', authenticateToken, orderController.freezeOrder);

// Cancel an order, requires authentication and possibly admin role
router.delete('/orders/:id', authenticateToken, orderController.cancelOrder);

module.exports = router;
