const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const errorMiddleware = require('../middleware/errorMiddleware');

router.post('/placeOrder', authMiddleware, roleMiddleware(['customer', 'VIP']), orderController.placeOrder);

router.post('/cancelOrder/:orderId', authMiddleware, roleMiddleware(['customer', 'VIP']), orderController.cancelOrder);

router.get('/getOrderDetails/:orderId', authMiddleware, roleMiddleware(['customer', 'VIP', 'manager']), orderController.getOrderDetails);

router.post('/makeDeposit', authMiddleware, roleMiddleware(['customer', 'VIP']), orderController.makeDeposit);

router.get('/getOrders', authMiddleware, roleMiddleware(['delivery']), orderController.listOrders);

router.put('/takeOrder/:orderId', authMiddleware, roleMiddleware(['delivery']), orderController.takeOrder);

module.exports = router;