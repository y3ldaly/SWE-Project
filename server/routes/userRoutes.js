const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.post('/register', userController.registerUser);

router.post('/login', userController.loginUser);

router.post('/updateProfile', authMiddleware, roleMiddleware(['customer', 'VIP']), userController.updateUserProfile);

router.post('/makeDeposit', authMiddleware, roleMiddleware(['customer', 'VIP']), userController.manageUserDeposit);

module.exports = router;