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
    createMenuItem: async (req, res) => {
        // Validate input data
        // Check if the chef is authorized to add menu items
        // Save the new menu item to the database
        // Return success response with the created menu item details
        const { chefId, dishName, description, price, keywords, imageUrl } = req.body;

    // Validate input data
    if (!chefId || !dishName || !description || !price || !imageUrl) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the chef is authorized to add menu items
    // This assumes authentication middleware sets req.user
    if (req.user.role !== 'chef' || req.user.id !== chefId) {
        return res.status(403).json({ message: "Unauthorized" });
    }

    // Check for duplicate dish names
    const existingDish = await MenuModel.findOne({ dishName });
    if (existingDish) {
        return res.status(409).json({ message: "Dish already exists" });
    }

    // Save the new menu item to the database
    const newMenuItem = new MenuModel({ chefId, dishName, description, price, keywords, imageUrl });
    try {
        await newMenuItem.save();
        res.status(201).json(newMenuItem);
    } catch (error) {
        res.status(500).json({ message: "Error saving the dish", error: error.message });
    }
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