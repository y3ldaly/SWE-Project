// Import necessary libraries and middleware
const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const checkRole = require('../middleware/roleMiddleware');
const menuController = require('../controllers/menuController');

// Create a router object from Express to handle route requests
const router = express.Router();

// Define a route to get all dishes; no authentication required
router.get('/menu', menuController.getAllDishes);

// Define a route to add a new dish; requires authentication and specific roles (chef or manager)
router.post('/menu', authenticateToken, checkRole(['chef', 'manager']), menuController.addDish);

// Define a route to update an existing dish; also requires authentication and specific roles
router.put('/menu/:id', authenticateToken, checkRole(['chef', 'manager']), menuController.updateDish);

// Define a route to delete a dish; requires authentication and specific roles as well
router.delete('/menu/:id', authenticateToken, checkRole(['chef', 'manager']), menuController.deleteDish);

// Export the router to be used in other parts of the application
module.exports = router;