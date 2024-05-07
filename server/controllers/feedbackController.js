const UserModel = require('../models/userModel');
const OrderModel = require('../models/orderModel');
const MenuModel = require('../models/menuModel');
const FeedbackModel = require('../models/feedbackModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const feedbackController = {
    
    customerSubmitFeedback: async (req, res) => {
        const { orderId } = req.params;
        const { feedbackType, subject, description, targetRole } = req.body;
    
        // Validate input
        if (!description || !feedbackType || !subject || !targetRole) {
            return res.status(400).json({ message: "Missing required fields" });
        }
    
        try {
            // Adjusted to use findOne and check against a custom 'orderId' field
            const order = await OrderModel.findOne({ orderId: orderId });
            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }
    
            // Determine target user based on the role
            let targetUsername;
            if (targetRole === 'chef') {
                targetUsername = order.chefUsername;
            } else if (targetRole === 'delivery') {
                targetUsername = order.deliveryUsername;
            } else {
                return res.status(400).json({ message: "Invalid target role" });
            }
    
            // Fetch the user details of the person receiving the feedback
            const targetUser = await UserModel.findOne({ username: targetUsername });
            if (!targetUser) {
                return res.status(404).json({ message: "User not found" });
            }
    
            // Increment complaints or compliments count
            if (feedbackType === 'complaint') {
                targetUser.complaints += 1;
            } else if (feedbackType === 'compliment') {
                targetUser.compliments += 1;
            }
            await targetUser.save();
    
            // Save feedback
            const newFeedback = new FeedbackModel({
                fromUser: req.user.userId,  // Changed from req.user._id to req.user.userId
                toUser: targetUser._id,
                relatedDish: null,
                type: feedbackType,
                subject,
                description,
                status: 'open'
            });
            await newFeedback.save();
    
            res.status(201).json({ message: "Feedback submitted successfully", feedback: newFeedback });
        } catch (error) {
            console.error("Error submitting feedback:", error);
            res.status(500).json({ message: "Error submitting feedback", error: error.message });
        }
    },
    
    

    deliverySubmitFeedback: async (req, res) => {
        const { orderId } = req.params;
        const { feedbackType, description } = req.body; // subject is not needed as it's always related to customers
    
        // Validate input
        if (!description || !feedbackType) {
            return res.status(400).json({ message: "Description and feedback type are required" });
        }
    
        try {
            // Ensuring that 'customer' is populated
            const order = await OrderModel.findOne({ orderId: orderId }).populate('customer');
            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }
    
            const targetUser = order.customer;
            if (!targetUser) {
                return res.status(404).json({ message: "Customer not found" });
            }
    
            // Adjust feedback counters
            if (feedbackType === 'complaint') {
                targetUser.complaints += 1;
            } else if (feedbackType === 'compliment') {
                targetUser.compliments += 1;
            }
            await targetUser.save(); // Now should work, as targetUser is a full Mongoose document
    
            // Save feedback
            const newFeedback = new FeedbackModel({
                fromUser: req.user.userId,
                toUser: targetUser._id,
                relatedDish: null,
                type: feedbackType,
                subject: 'delivery',
                description,
                status: 'open'
            });
            await newFeedback.save();
    
            res.status(201).json({ message: "Feedback submitted successfully", feedback: newFeedback });
        } catch (error) {
            console.error("Error submitting feedback:", error);
            res.status(500).json({ message: "Error submitting feedback", error: error.message });
        }
    },
    

    chefSubmitFeedback: async (req, res) => {
        const { importerUsername, subject, description } = req.body; // Now using importerUsername
    
        // Validate input
        if (!description || !importerUsername || !subject) {
            return res.status(400).json({ message: "Importer username, subject, and description are required" });
        }
    
        // Validate the subject
        if (!['food quality', 'fraud'].includes(subject)) {
            return res.status(400).json({ message: "Invalid subject. Must be either 'food quality' or 'fraud'." });
        }
    
        try {
            // Find the importer by username
            const importer = await UserModel.findOne({ username: importerUsername, role: 'importer' });
            if (!importer) {
                return res.status(404).json({ message: "Importer not found or invalid" });
            }
    
            // Increment complaint count for the importer
            importer.complaints += 1;
            await importer.save();
    
            // Save the complaint
            const newComplaint = new FeedbackModel({
                fromUser: req.user.userId, // Ensure this is correctly set from the JWT token
                toUser: importer._id,
                relatedDish: null,  // Since this feedback is not related to a specific dish
                type: 'complaint',
                subject,
                description,
                status: 'open'
            });
            await newComplaint.save();
    
            res.status(201).json({ message: "Complaint submitted successfully", complaint: newComplaint });
        } catch (error) {
            console.error("Error submitting complaint:", error);
            res.status(500).json({ message: "Error submitting complaint", error: error.message });
        }
    },
    



    rateMenuItem: async (req, res) => {
        const { dishName, score} = req.body;
        const customerId = req.user.userId; // Assuming `req.user` is set from auth middleware
    
        if (!score || typeof score !== 'number' || score < 1 || score > 5) {
            return res.status(400).json({ message: "Score must be a number between 1 and 5." });
        }
    
        try {
            // Verify that the customer has ordered this dish and the order is completed
            const orders = await OrderModel.find({
                customer: customerId,
                "dishes.dish": dishName, // Need to adjust if dishes.dish does not directly store dishName
                status: 'completed'
            }).populate('dishes.dish');
    
            // if (!orders.length) {
            //     return res.status(403).json({ message: "You can only rate dishes that you have ordered and received." });
            // }
    
            // Find the menu item and update its ratings
            const menu = await MenuModel.findOne({ dishName: dishName });
            if (!menu) {
                return res.status(404).json({ message: "Dish not found." });
            }
    
            // Add new rating and calculate new average rating
            menu.ratings.push({ customerId, score});
            
            // Calculate new average rating
            let sum = menu.ratings.reduce((acc, curr) => acc + curr.score, 0);
            menu.averageRating = sum / menu.ratings.length;
    
            await menu.save();
    
            res.status(200).json({ message: "Rating submitted successfully", averageRating: menu.averageRating, menu });
        } catch (error) {
            console.error("Error submitting rating:", error);
            res.status(500).json({ message: "Error submitting rating", error: error.message });
        }
    },
    

    // Respond to feedback as a manager or user involved
    respondToFeedback: (req, res) => {
        // Validate response data
        // Check user authentication and authorization to respond
        // Update the feedback record with the user's response
        // Potentially adjust the user's status based on feedback resolution (warnings, demotions, etc.)
        // Notify original feedback submitter of the response
        // Return success response with updated feedback details
    },

    // List feedback for a user or manager
    listFeedback: (req, res) => {
        // Authenticate and authorize user or manager
        // Fetch all relevant feedback based on user role and filters (such as unresolved, recent, etc.)
        // Return the list of feedback entries
    },


    // View specific feedback details
    getAllComplaints: (req, res) => {
        // Authenticate user
        // Fetch the specific feedback from the database using the feedback ID
        // Check if the user has permission to view this feedback
        // Return feedback details
    }
};

module.exports = feedbackController;