const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Retrieves all orders, potentially needs authentication and admin role
router.get('/orders', authMiddleware, orderController.getAllOrders);

// Retrieve details of a specific order, requires authentication
router.get('/orders/:id', authMiddleware, orderController.getOrderById);

// Create a new order, requires authentication
router.post('/orders', authMiddleware, orderController.createOrder);

// Update an order, requires authentication and possibly checks for order status
router.put('/orders/:id', authMiddleware, orderController.updateOrder);

// Freeze an order due to insufficient funds, requires authentication and admin role
router.put('/orders/:id/freeze', authMiddleware, orderController.freezeOrder);

// Cancel an order, requires authentication and possibly admin role
router.delete('/orders/:id', authMiddleware, orderController.cancelOrder);

module.exports = router;