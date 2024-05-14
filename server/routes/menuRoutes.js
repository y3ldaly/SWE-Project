const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const errorMiddleware = require('../middleware/errorMiddleware');

// Create a new menu item (only accessible by chefs)
router.post('/',
  authMiddleware,
  roleMiddleware(['chef']),
  menuController.createMenuItem);

// Update an existing menu item (only accessible by the chef who created it)
router.put('/:dishName',
  authMiddleware,
  roleMiddleware(['chef']),
  menuController.updateMenuItem);

// Delete a menu item (only accessible by the chef who created it)
router.delete('/:dishName',
  authMiddleware,
  roleMiddleware(['chef']),
  menuController.deleteMenuItem);

// List all menu items (accessible to everyone)
router.get('/menuItems',
  menuController.listMenuItems);

// Get detailed information about a single menu item (accessible to everyone)
router.get('/:dishName',
  menuController.getMenuItemDetails);


// Rate a menu item (only accessible by customers)

module.exports = router;