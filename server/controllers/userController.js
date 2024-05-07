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

            // Create a new user object
            const newUser = new UserModel({
                firstName,
                lastName,
                username,
                email,
                password: hashedPassword,
                role,
                status: 'active',
                warnings: 0,
                compliments: 0,
                complaints: 0,
                balance: 0,
                ordersCount: 0,
                isVIP: false
            });

            // Save the new user
            const savedUser = await newUser.save();

            // Create a token for the new user with a 24-hour expiration
            const token = jwt.sign(
                { userId: savedUser._id, username: savedUser.username, role: savedUser.role },
                process.env.JWT_SECRET,
                { expiresIn: '24h' }  // Set expiration to 24 hours
            );

            // Send confirmation response with token and user details
            res.status(201).json({
                message: "User registered successfully",
                token,
                userId: savedUser._id,
                username: savedUser.username,
                email: savedUser.email,
                role: savedUser.role
            });
        } catch (error) {
            res.status(500).json({ message: "Error registering user", error: error.message });
        }
    },

    loginUser: async (req, res) => {
        const { username, password } = req.body;

        try {
            // Find user by username or email
            const user = await UserModel.findOne({ $or: [{ username }, { email: username }] });
            if (!user) {
                return res.status(401).json({ message: "Invalid username or email" });
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
  
  makeDeposit: async (req, res) => {
          const { amount } = req.body;
          const userId = req.user.userId;

          if (!amount || amount <= 0) {
              return res.status(400).json({ message: "Invalid deposit amount" });
          }

          try {
              // Validate user exists
              const user = await UserModel.findById(userId);
              if (!user) {
                  return res.status(404).json({ message: "User not found" });
              }

              user.balance += amount;
              await user.save();

              // Send success response
              res.status(200).json({
                  message: "Deposit successful",
                  amount,
                  balance: user.balance
              });
          } catch (error) {
              console.error("Error managing deposit:", error);
              res.status(500).json({ message: "Failed to manage deposit", error: error.message });
          }
      },
  
  
    // Closes a user account
    closeUserAccount: (req, res) => {
        // Authenticate and check authorization
        // Remove user data from database or mark as closed
        // Handle any account balance or open orders
        // Send closure confirmation
    }

};

module.exports = userController;












