const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const errorMiddleware = require('../middleware/errorMiddleware');

router.post('/placeOrder', authMiddleware, roleMiddleware(['customer']), orderController.placeOrder);

router.post('/updateOrder/:orderId', authMiddleware, roleMiddleware(['customer']), orderController.updateOrder);

router.put('/cancelOrder/:orderId', authMiddleware, roleMiddleware(['customer']), orderController.cancelOrder);

router.get('/getOrderDetails/:orderId', authMiddleware, roleMiddleware(['customer', 'manager']), orderController.getOrderDetails);




module.exports = router;