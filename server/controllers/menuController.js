const MenuModel = require('../models/menuModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// This object contains functions that handle requests related to menu items.
const menuController = {
    // Get a list of all dishes from the database.
    getAllDishes: (req, res) => {
        MenuModel.find({}, (err, menu) => {
            if (err) {
                console.error('Error fetching dishes:', err); // Log the error for internal monitoring.
                return res.status(500).json({ message: "Failed to retrieve dishes due to server error." });
            }
            res.status(200).json(menu); // If no error, send back all the dishes in JSON format.
        });
    },

    // Add a new dish to the database.
    addDish: (req, res) => {
        const newDish = new MenuModel(req.body); // Create a new dish using data from the request.
        newDish.save((err, dish) => {
            if (err) {
                console.error('Error adding new dish:', err); // Log the error for internal monitoring.
                return res.status(500).json({ message: "Failed to add new dish due to server error." });
            }
            res.status(201).json(dish); // If saved successfully, send back the newly created dish.
        });
    },

    // Update an existing dish in the database.
    updateDish: (req, res) => {
        MenuModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, dish) => {
            if (err) {
                console.error('Error updating dish:', err); // Log the error for internal monitoring.
                return res.status(500).json({ message: "Failed to update dish due to server error." });
            }
            if (!dish) {
                return res.status(404).json({ message: "Dish not found." });
            }
            res.status(200).json(dish); // If update is successful, send back the updated dish.
        });
    },

    // Delete a dish from the database.
    deleteDish: (req, res) => {
        MenuModel.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                console.error('Error deleting dish:', err); // Log the error for internal monitoring.
                return res.status(500).json({ message: "Failed to delete dish due to server error." });
            }
            res.status(204).send('Dish deleted'); // If deletion is successful, send a success message.
        });
    }
};

// Make the menuController available for other files to use.
module.exports = menuController;
