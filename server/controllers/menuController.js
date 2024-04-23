// Import the Menu model so we can interact with the database about menu items.
const MenuModel = require('../models/Menu');

// This object contains functions that handle requests related to menu items.
const menuController = {
    // Get a list of all dishes from the database.
    getAllDishes: (req, res) => {
        MenuModel.find({}, (err, menu) => {
            if (err) return res.status(500).send(err); // If an error happens, send a server error message.
            res.status(200).json(menu); // If no error, send back all the dishes in JSON format.
        });
    },

    // Add a new dish to the database.
    addDish: (req, res) => {
        const newDish = new MenuModel(req.body); // Create a new dish using data from the request.
        newDish.save((err, dish) => { // Save the new dish to the database.
            if (err) return res.status(500).send(err); // If an error happens, send a server error message.
            res.status(201).json(dish); // If saved successfully, send back the newly created dish.
        });
    },

    // Update an existing dish in the database.
    updateDish: (req, res) => {
        MenuModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, dish) => {
            if (err) return res.status(500).send(err); // If an error happens, send a server error message.
            res.status(200).json(dish); // If update is successful, send back the updated dish.
        });
    },

    // Delete a dish from the database.
    deleteDish: (req, res) => {
        MenuModel.findByIdAndRemove(req.params.id, (err) => {
            if (err) return res.status(500).send(err); // If an error happens, send a server error message.
            res.status(204).send('Dish deleted'); // If deletion is successful, send a success message.
        });
    }
};

// Make the menuController available for other files to use.
module.exports = menuController;