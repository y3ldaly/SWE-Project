const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/register', userController.registerUser);

router.post('/login', userController.loginUser);

router.post('/updateProfile', authMiddleware, roleMiddleware(['customer', 'VIP']), userController.updateOwnProfile);

module.exports = router;