const UserModel = require('../models/userModel');
const OrderModel = require('../models/orderModel');
const MenuModel = require('../models/menuModel');
const FeedbackModel = require('../models/feedbackModel');
const ForumModel = require('../models/forumModel');
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
    



    respondToFeedback: async (req, res) => {
        const { feedbackId, action } = req.body;
    
        console.log(`Action received: ${action}`);
    
        try {
            const feedback = await FeedbackModel.findById(feedbackId).populate('fromUser').populate('toUser');
            if (!feedback) {
                return res.status(404).json({ message: "Feedback not found" });
            }
    
            console.log(`Feedback found: ${feedback._id}, Type: ${feedback.type}, Subject: ${feedback.subject}`);
    
            const targetUser = await UserModel.findById(feedback.toUser._id);
            if (!targetUser) {
                return res.status(404).json({ message: "Target user not found" });
            }
    
            console.log(`Target User before changes: Compliments: ${targetUser.app_compliments}, Complaints: ${targetUser.app_complaints}`);
    
            if (action === 'approve') {
                if (feedback.subject === 'food quality' || feedback.subject === 'fraud') {
                    // Specific logic for complaints against importers
                    if (feedback.subject === 'fraud') {
                        targetUser.status = 'deactivated'; // Immediate dismissal for fraud
                        feedback.resolution = 'dismissal';
                        await UserModel.findByIdAndUpdate(targetUser._id, { status: 'deactivated' });
                    } else if (feedback.subject === 'food quality') {
                        targetUser.app_complaints += 1;
                        if (targetUser.app_complaints >= 2) {
                            targetUser.demotion_count += 1;
                            targetUser.salary -= 1; // Demote the importer by reducing salary
                            feedback.resolution = 'demotion';
                            if (targetUser.demotion_count >= 2) {
                                targetUser.status = 'deactivated'; // Dismiss if demoted twice
                                feedback.resolution = 'dismissal';
                                await UserModel.findByIdAndUpdate(targetUser._id, { status: 'deactivated' });
                            }
                        } else {
                            feedback.resolution = 'warning';
                        }
                    }
                    await targetUser.save();
                } else {
                    // Handle other types of feedback
                    if (feedback.type === 'complaint') {
                        if (targetUser.app_compliments > 0) {
                            targetUser.app_compliments -= 1;
                        } else {
                            targetUser.app_complaints += 1;
                        }
    
                        if (targetUser.app_complaints >= 2) {
                            targetUser.demotion_count += 1;
                            targetUser.salary -= 1;
                            feedback.resolution = targetUser.demotion_count >= 2 ? 'dismissal' : 'demotion';
                            if (feedback.resolution === 'dismissal') {
                                await UserModel.findByIdAndUpdate(targetUser._id, { status: 'deactivated' });
                            }
                        } else {
                            feedback.resolution = 'warning';
                        }
                    } else if (feedback.type === 'compliment') {
                        if (targetUser.app_complaints > 0) {
                            targetUser.app_complaints -= 1;
                        } else {
                            targetUser.app_compliments += 1;
                        }
    
                        if (targetUser.app_compliments >= 2) {
                            targetUser.promotion_count += 1;
                            targetUser.salary += 1;
                            feedback.resolution = 'bonus';
                        } else {
                            feedback.resolution = 'none';
                        }
                    }
                    await targetUser.save();
                }
            } else if (action === 'deny') {
                feedback.fromUser.warnings += 1;
                if (feedback.fromUser.role === 'VIP' && feedback.fromUser.warnings >= 2) {
                    feedback.fromUser.role = 'customer';
                    feedback.fromUser.warnings = 0;
                } else if (feedback.fromUser.warnings >= 2) {
                    feedback.fromUser.status = 'deactivated';
                    await UserModel.findByIdAndUpdate(feedback.fromUser._id, { status: 'deactivated' });
                }
                feedback.resolution = 'none';
            }
    
            feedback.status = 'resolved';
            await feedback.save();
            await feedback.fromUser.save();
    
            res.status(200).json({ message: "Feedback response processed successfully", feedback });
        } catch (error) {
            console.error("Error responding to feedback:", error);
            res.status(500).json({ message: "Error responding to feedback", error: error.message });
        }
    },
    
    
    
    
    


    // List feedback for a user or manager
    listFeedback: async (req, res) => {
        try {
            // Only a manager can view all feedback
            if (req.user.role !== 'manager') {
                return res.status(403).json({ message: "Access denied. Only managers can access this resource." });
            }
    
            const feedbacks = await FeedbackModel.find()
                .populate('fromUser', 'username')  // Optional: Adjust the fields as necessary
                .populate('toUser', 'username');  // Optional: Adjust the fields as necessary
    
            res.status(200).json(feedbacks);
        } catch (error) {
            console.error("Error listing feedback:", error);
            res.status(500).json({ message: "Error retrieving feedback", error: error.message });
        }
    },

    forumCollector: async (req, res) => {
        const { type, comment, parentId } = req.body;
    
        if (!type || !comment) {
            return res.status(400).json({ message: "Type and comment are required fields." });
        }
    
        try {
            const user = await UserModel.findById(req.user.userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            // Create a new forum entry whether it's a post or a reply
            const newForumEntry = new ForumModel({
                username: user.username,
                type,
                comment
            });
    
            if (type === 'reply' && parentId) {
                // Find the parent post to link the reply
                const parentPost = await ForumModel.findById(parentId);
                if (!parentPost) {
                    return res.status(404).json({ message: "Parent post not found" });
                }
    
                // Save the new reply to the database first to get its ID
                const savedReply = await newForumEntry.save();
    
                // Add the reply's ID to the parent post's replies array
                parentPost.replies.push(savedReply._id);
                await parentPost.save();
    
                return res.status(201).json({
                    message: "Reply added successfully",
                    reply: savedReply,
                    parentPost
                });
            } else {
                // Simply save the new post if it's not a reply
                await newForumEntry.save();
                res.status(201).json({
                    message: "Forum entry added successfully",
                    entry: newForumEntry
                });
            }
        } catch (error) {
            console.error("Error in forumCollector:", error);
            res.status(500).json({ message: "Failed to add forum entry", error: error.message });
        }
    },
    

    listForumPosts: async (req, res) => {
        try {
            // Fetch all posts that are of type 'post' and populate their replies
            const posts = await ForumModel.find({ type: 'post' })
                .populate({
                    path: 'replies',
                    match: { type: 'reply' },
                    options: { sort: { postedAt: 1 } } // Sorting replies by postedAt
                })
                .sort({ postedAt: -1 }); // Sorting posts by postedAt in descending order
            
            if (!posts.length) {
                return res.status(404).json({ message: "No discussion posts found" });
            }

            res.status(200).json(posts);
        } catch (error) {
            console.error("Error fetching forum posts:", error);
            res.status(500).json({ message: "Error fetching discussion posts", error: error.message });
        }
    }
};
module.exports = feedbackController;