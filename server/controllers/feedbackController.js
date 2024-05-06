const UserModel = require('../models/userModel');
const TransactionModel = require('../models/transactionModel');
const OrderModel = require('../models/orderModel');
const MenuModel = require('../models/menuModel');
const FeedbackModel = require('../models/feedbackModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const feedbackController = {
    
    submitFeedback: async (req, res) => {
    const { orderId } = req.params;
    const { feedbackType, subject, description, targetRole } = req.body;

    // Validate input
    if (!description || !feedbackType || !subject || !targetRole) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    try {
        const order = await OrderModel.findById(orderId);
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
            fromUser: req.user._id,
            toUser: targetUser._id,
            relatedDish: null,  // If you need to specify a dish, this needs to be handled
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


    rateMenuItem: (req, res) => {
        // Validate rating input
        // Check if the customer is authorized to rate the item
        // Update or add a new rating for the menu item
        // Recalculate the average rating for the menu item
        // Return success response with new rating details
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

    // Review and finalize feedback resolution (primarily for managers)
    finalizeFeedbackResolution: (req, res) => {
        // Authenticate and check if the user is a manager
        // Review feedback details and any responses or disputes
        // Decide on and apply the final resolution (such as issuing warnings, demotions, or acknowledgments)
        // Update the feedback record to reflect the resolution
        // Notify all involved parties of the final decision
        // Return success response with resolution details
    },

    // View specific feedback details
    getFeedbackDetails: (req, res) => {
        // Authenticate user
        // Fetch the specific feedback from the database using the feedback ID
        // Check if the user has permission to view this feedback
        // Return feedback details
    }
};

module.exports = feedbackController;