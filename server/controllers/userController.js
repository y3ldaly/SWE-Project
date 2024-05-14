const UserModel = require('../models/userModel');
const OrderModel = require('../models/orderModel');
const MenuModel = require('../models/menuModel');
const FeedbackModel = require('../models/feedbackModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userController = {

    registerUser: async (req, res) => {
        const { firstName, lastName, username, email, password, role } = req.body;
    
        try {
            // Check if user already exists by username or email
            const existingUser = await UserModel.findOne({ $or: [{ username }, { email }] });
            if (existingUser) {
                return res.status(409).json({ message: "User already exists with the same username or email" });
            }
    
            // Hash the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
    
            // Set hourly rate based on role
            let hourlyRate = 0;
            if (role === "chef") {
                hourlyRate = 25;
            } else if (role === "delivery" || role == "importer") {
                hourlyRate = 20;
            }
    
            // Create a new user object
            const newUser = new UserModel({
                firstName,
                lastName,
                username,
                email,
                password: hashedPassword,
                role,
                hourlyRate,
                active: true
            });
    
            // Save the new user
            const savedUser = await newUser.save();
    
            // Create a token for the new user with a 24-hour expiration
            const token = jwt.sign(
                { userId: savedUser._id, username: savedUser.username, role: savedUser.role },
                process.env.JWT_SECRET,
                { expiresIn: '24h' } 
            );
    
            // Send confirmation response with token and user details
            res.status(201).json({
                message: "User registered successfully",
                token,
                userId: savedUser._id,
                username: savedUser.username,
                email: savedUser.email,
                role: savedUser.role,
                hourlyRate
            });
        } catch (error) {
            res.status(500).json({ message: "Error registering user", error: error.message });
        }
    },

    loginUser: async (req, res) => {
        const { email, password } = req.body;

        try {
            // Find user by username or email
            const user = await UserModel.findOne({
                $or: [{ email }, { username: email }],
                status: 'active'  // Ensure user status is 'active'
            });

            // Validate user existence and status
            if (!user) {
                return res.status(401).json({ message: "Invalid username or email, or user is not active." });
            }

            // Check if the provided password matches the stored hashed password
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Invalid password" });
            }

            // Generate JWT token
            const token = jwt.sign(
                { userId: user._id, username: user.username, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }
            );

            // Send success response with token
            res.status(200).json({
                message: "Login successful",
                token,
                userId: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            });

        } catch (error) {
            res.status(500).json({ message: "Error logging in user", error: error.message });
        }
    },
    
    updateOwnProfile: async (req, res) => {
        const { firstName, lastName, username, email, password } = req.body;
        const userId = req.user.userId;  // Extracted from JWT
    
        try {
            // Find the user by their ID
            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }
    
            // Optional: Check if the new username or email already exists
            const doesExist = await UserModel.findOne({
                $or: [{ username }, { email }],
                _id: { $ne: userId }
            });
            if (doesExist) {
                return res.status(400).json({ message: "Username or email already in use" });
            }
    
            // Update fields if provided
            if (username) user.username = username;
            if (email) user.email = email;
            if (firstName) user.firstName = firstName;
            if (lastName) user.lastName = lastName;
    
            // If a new password is provided, hash it before saving
            if (password) {
                const salt = await bcrypt.genSalt(10);
                user.password = await bcrypt.hash(password, salt);
            }
    
            // Save the updated user info
            await user.save();
    
            // Respond to the client
            res.status(200).json({
                message: "User profile updated successfully",
                user: { id: user._id, username: user.username, email: user.email }
            });
        } catch (error) {
            res.status(500).json({ message: "Failed to update user profile", error: error.message });
        }
    },
  
    closeAccount: async (req, res) => {
        const userId = req.user.userId; 

        try {
            // Find the user by their ID
            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found" });
            }

            // Check if the user is already deactivated
            if (user.status === 'deactivated') {
                return res.status(400).json({ message: "Account already deactivated" });
            }

            // Update the user's status to 'deactivated'
            user.status = 'deactivated';

            // Save the updated user information
            await user.save();

            // Send a response back that the account has been deactivated
            res.json({ message: "Account has been successfully deactivated" });
        } catch (error) {
            res.status(500).json({ message: "Error deactivating account", error: error.message });
        }
    },

    getUserDetails: async (req, res) => {
        const userId = req.user.userId;

        try {
            const user = await UserModel.findById(userId);
            if (!user) {
                return res.status(404).json({ message: "User not found." });
            }

            // Initialize the response object
            let userDetails = {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                email: user.email,
                role: user.role,
                status: user.status
            };

            // Append additional details based on the role
            switch (user.role) {
                case 'customer':
                case 'VIP':
                    userDetails = {
                        ...userDetails,
                        balance: user.balance,
                        moneySpent: user.moneySpent,
                        orderCount: user.orderCount
                    };
                    break;
                case 'chef':
                case 'importer':
                case 'delivery':
                    userDetails = {
                        ...userDetails,
                        hourlyRate: user.hourlyRate
                    };
                    break;
                case 'manager':
                    // Only the base details are added for managers, which are already in userDetails
                    break;
                default:
                    return res.status(403).json({ message: "Unauthorized access to user details" });
            }

            res.json({ message: "User details retrieved successfully", userDetails });
        } catch (error) {
            res.status(500).json({ message: "Error retrieving user details", error: error.message });
        }
    }

};

module.exports = userController;