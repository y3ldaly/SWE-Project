const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Return a list of all registered users, restricted to admin users
router.get('/users', authMiddleware, roleMiddleware(['admin']), userController.getAllUsers);

// Return a user’s details, requires authentication
router.get('/users/:id', authMiddleware, userController.getUserById);

// Register a new user, public access
router.post('/users/register', userController.registerUser);

// Authenticate a user and issue a token, public access
router.post('/users/login', userController.loginUser);

// Update a user's profile or status, requires authentication
router.put('/users/:id', authMiddleware, userController.updateUser);

// Promote a user, requires authentication and admin role
router.put('/users/:id/promote', authMiddleware, roleMiddleware(['admin']), userController.promoteUser);

// Demote a user, requires authentication and admin role
router.put('/users/:id/demote', authMiddleware, roleMiddleware(['admin']), userController.demoteUser);

// Delete a user's account, requires authentication and admin role
router.delete('/users/:id', authMiddleware, roleMiddleware(['admin']), userController.deleteUser);

module.exports = router;