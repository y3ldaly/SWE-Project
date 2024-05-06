const UserModel = require('../models/userModel');
const TransactionModel = require('../models/transactionModel');
const OrderModel = require('../models/orderModel');
const MenuModel = require('../models/menuModel');
const FeedbackModel = require('../models/feedbackModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const menuController = {
    
    // Create a new menu item by a chef
    createMenuItem: async (req, res) => {
        // Validate input data
        // Check if the chef is authorized to add menu items
        // Save the new menu item to the database
        // Return success response with the created menu item details
        const {dishName, description, price, keywords, imageUrl } = req.body;

    // Validate input data
    if (!dishName || !description || !price || !imageUrl) {
        return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the chef is authorized to add menu items
    // This assumes authentication middleware sets req.user
    // if (req.user.role !== 'chef') {
    //     return res.status(403).json({ message: "Unauthorized" });
    // }

    // Check for duplicate dish names
    const existingDish = await MenuModel.findOne({ dishName });
    if (existingDish) {
        return res.status(409).json({ message: "Dish already exists" });
    }

    // Save the new menu item to the database
    const newMenuItem = new MenuModel({dishName, description, price, keywords, imageUrl });
    try {
        await newMenuItem.save();
        res.status(201).json(newMenuItem);
    } catch (error) {
        res.status(500).json({ message: "Error saving the dish", error: error.message });
    }
    },

    // Update an existing menu item
    updateMenuItem: async (req, res) => {
        const { dishName } = req.params;  // Using dish name as a parameter
        const updates = req.body;
    
        // Validate input data
        if (!updates.description || !updates.price || !updates.imageUrl) {
            return res.status(400).json({ message: "All required fields must be provided." });
        }
    
        try {
            // Find the menu item in the database
            const menu = await MenuModel.findOne({ dishName });
            if (!menu) {
                return res.status(404).json({ message: "Menu item not found" });
            }
    
            // Check if the authenticated user is the chef who created the menu item
            // if (req.user._id.toString() !== menu.chefId.toString()) {
            //     return res.status(403).json({ message: "Unauthorized" });
            // }
    
            // Update the menu item in the database
            const updatedMenu = await MenuModel.findOneAndUpdate({ dishName }, updates, { new: true });
            res.status(200).json(updatedMenu);
        } catch (error) {
            res.status(500).json({ message: "Error updating the dish", error: error.message });
        }
    },
    

    // Delete a menu item
    deleteMenuItem: async (req, res) => {
    
    const { dishName } = req.params;  // Using dish name as a parameter

    const menu = await MenuModel.findOne({ dishName });
    if (!menu) {
        return res.status(404).json({ message: "Menu item not found" });
    }

    // if (req.user._id.toString() !== menu.chefId.toString()) {
    //     return res.status(403).json({ message: "Unauthorized" });
    // }

    try {
        await MenuModel.findOneAndDelete({ dishName });
        res.status(204).json({ message: "Menu item deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting the dish", error: error.message });
    }
        // Check if the chef is authorized to delete the menu item
        // Find the menu item in the database and delete it
        // Return success response
    },

    // List all menu items
    // List all menu items
    listMenuItems: async (req, res) => {
        try {
            const menuItems = await MenuModel.find();
            res.status(200).json(menuItems);
        } catch (error) {
            res.status(500).json({ message: "Error fetching menu items", error: error.message });
        }
    },
    // Get detailed information about a single menu item
    // Get detailed information about a single menu item identified by dish name
    getMenuItemDetails: async (req, res) => {
        const { dishName } = req.params;  // Using dish name as a parameter

        try {
            const menuItem = await MenuModel.findOne({ dishName });
            if (!menuItem) {
                return res.status(404).json({ message: "Menu item not found" });
            }
            res.status(200).json(menuItem);
        } catch (error) {
            res.status(500).json({ message: "Error retrieving the menu item", error: error.message });
        }
    }

        // Fetch the specific menu item from the database using its ID
        // Include detailed information like descriptions, ratings, and reviews
        // Return the menu item details
};

module.exports = menuController;














