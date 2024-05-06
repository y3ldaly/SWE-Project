const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const errorMiddleware = require('../middleware/errorMiddleware');
const router = express.Router();

router.post('/register', userController.registerUser);

router.post('/login', userController.loginUser);

router.post('/updateProfile', authMiddleware, userController.updateOwnProfile);

router.post('/makeDeposit', authMiddleware, roleMiddleware(['customer']), userController.makeDeposit);

module.exports = router;