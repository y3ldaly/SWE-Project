const MenuModel = require('../models/menuModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/*
    Essentials:
                - createMenuItem
                - updateMenuItem
                - deleteMenuItem
                - listMenuItems
                - getMenuItemDetails
*/

const menuController = {
    
    // Create a new menu item by a chef
    createMenuItem: (req, res) => {
        // Validate input data
        // Check if the chef is authorized to add menu items
        // Save the new menu item to the database
        // Return success response with the created menu item details
    },

    // Update an existing menu item
    updateMenuItem: (req, res) => {
        // Validate input data
        // Check if the chef is authorized to update the menu item
        // Find the menu item in the database and update it
        // Return success response with the updated menu item details
    },

    // Delete a menu item
    deleteMenuItem: (req, res) => {
        // Check if the chef is authorized to delete the menu item
        // Find the menu item in the database and delete it
        // Return success response
    },

    // List all menu items
    listMenuItems: (req, res) => {
        // Fetch all menu items from the database
        // Optionally apply filters based on query parameters (e.g., most popular, highest-rated)
        // Return the list of menu items
    },

    // Get detailed information about a single menu item
    getMenuItemDetails: (req, res) => {
        // Fetch the specific menu item from the database using its ID
        // Include detailed information like descriptions, ratings, and reviews
        // Return the menu item details
    },

    // Handle ratings for a menu item by customers
    rateMenuItem: (req, res) => {
        // Validate rating input
        // Check if the customer is authorized to rate the item
        // Update or add a new rating for the menu item
        // Recalculate the average rating for the menu item
        // Return success response with new rating details
    }
};

module.exports = menuController;





















// // This object contains functions that handle requests related to menu items.
// const menuController = {
//     // Get a list of all dishes from the database.
//     getAllDishes: (req, res) => {
//         MenuModel.find({}, (err, menu) => {
//             if (err) {
//                 console.error('Error fetching dishes:', err); // Log the error for internal monitoring.
//                 return res.status(500).json({ message: "Failed to retrieve dishes due to server error." });
//             }
//             res.status(200).json(menu); // If no error, send back all the dishes in JSON format.
//         });
//     },

//     // Add a new dish to the database.
//     addDish: (req, res) => {
//         const newDish = new MenuModel(req.body); // Create a new dish using data from the request.
//         newDish.save((err, dish) => {
//             if (err) {
//                 console.error('Error adding new dish:', err); // Log the error for internal monitoring.
//                 return res.status(500).json({ message: "Failed to add new dish due to server error." });
//             }
//             res.status(201).json(dish); // If saved successfully, send back the newly created dish.
//         });
//     },

//     // Update an existing dish in the database.
//     updateDish: (req, res) => {
//         MenuModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, dish) => {
//             if (err) {
//                 console.error('Error updating dish:', err); // Log the error for internal monitoring.
//                 return res.status(500).json({ message: "Failed to update dish due to server error." });
//             }
//             if (!dish) {
//                 return res.status(404).json({ message: "Dish not found." });
//             }
//             res.status(200).json(dish); // If update is successful, send back the updated dish.
//         });
//     },

//     // Delete a dish from the database.
//     deleteDish: (req, res) => {
//         MenuModel.findByIdAndRemove(req.params.id, (err) => {
//             if (err) {
//                 console.error('Error deleting dish:', err); // Log the error for internal monitoring.
//                 return res.status(500).json({ message: "Failed to delete dish due to server error." });
//             }
//             res.status(204).send('Dish deleted'); // If deletion is successful, send a success message.
//         });
//     }
// };

// // Make the menuController available for other files to use.
// module.exports = menuController;
