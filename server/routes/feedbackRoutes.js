const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedbackController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Route for customers to submit feedback (complaint or compliment)
router.post('/customer/:orderId', 
    authMiddleware, 
    roleMiddleware(['customer', 'VIP']), // Assuming VIP customers can also submit feedback
    feedbackController.customerSubmitFeedback);

// Route for delivery personnel to submit feedback on customers
router.post('/delivery/:orderId', 
    authMiddleware, 
    roleMiddleware(['delivery']), 
    feedbackController.deliverySubmitFeedback);

// Route for chefs to submit complaints about importers
router.post('/chef/importer', 
    authMiddleware, 
    roleMiddleware(['chef']), 
    feedbackController.chefSubmitFeedback);

router.post('/rateMenu', authMiddleware, roleMiddleware(['customer', 'VIP']), feedbackController.rateMenuItem);

module.exports = router;
