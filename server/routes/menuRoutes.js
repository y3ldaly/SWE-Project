const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Define a route to get all dishes; no authentication required
router.get('/menu', menuController.getAllDishes);

// Define a route to add a new dish; requires authentication and specific roles (chef or manager)
router.post('/menu', authMiddleware, roleMiddleware(['chef', 'manager']), menuController.addDish);

// Define a route to update an existing dish; also requires authentication and specific roles
router.put('/menu/:id', authMiddleware, roleMiddleware(['chef', 'manager']), menuController.updateDish);

// Define a route to delete a dish; requires authentication and specific roles as well
router.delete('/menu/:id', authMiddleware, roleMiddleware(['chef', 'manager']), menuController.deleteDish);

// Export the router to be used in other parts of the application
module.exports = router;