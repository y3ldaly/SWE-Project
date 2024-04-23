const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const checkRole = require('../middleware/roleMiddleware');  // Corrected import
const userController = require('../controllers/userController');

const router = express.Router();

// Return a list of all registered users, restricted to admin users
router.get('/users', authenticateToken, checkRole(['admin']), userController.getAllUsers);

// Return a user’s details, requires authentication
router.get('/users/:id', authenticateToken, userController.getUserById);

// Register a new user, public access
router.post('/users/register', userController.registerUser);

// Authenticate a user and issue a token, public access
router.post('/users/login', userController.loginUser);

// Update a user's profile or status, requires authentication
router.put('/users/:id', authenticateToken, userController.updateUser);

// Promote a user, requires authentication and admin role
router.put('/users/:id/promote', authenticateToken, checkRole(['admin']), userController.promoteUser);

// Demote a user, requires authentication and admin role
router.put('/users/:id/demote', authenticateToken, checkRole(['admin']), userController.demoteUser);

// Delete a user's account, requires authentication and admin role
router.delete('/users/:id', authenticateToken, checkRole(['admin']), userController.deleteUser);

module.exports = router;