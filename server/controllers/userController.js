const UserModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/*
    Essentials:
                - registerUser (Done)
                - loginUser
                - updateUserProfile
                - manageUserDeposit
*/

const userController = {
    
    registerUser: async (req, res) => {
        const { username, password, role, email } = req.body;

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
                username,
                password: hashedPassword,
                role,
                email,
                status: 'active',
                warnings: 0,
                spending: 0,
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
                userId: savedUser._id,
                token,
                role: savedUser.role,
                isVIP: savedUser.isVIP
            });
        } catch (error) {
            res.status(500).json({ message: "Error registering user", error: error.message });
        }
    },

    loginUser: (req, res) => {
        // Validate login credentials
        // Authenticate user
        // Issue a token (JWT or similar)
        // Send success response with token
    },

    // Updates user profile information
    updateUserProfile: (req, res) => {
        // Authenticate and authorize user
        // Validate new profile data
        // Update user in database
        // Send success response
    },

    // Activates or deactivates a user account
    toggleUserActiveStatus: (req, res) => {
        // Check manager authorization
        // Update user's active status in the database
        // Send success or error response
    },

    // Manages user warnings
    manageWarnings: (req, res) => {
        // Authenticate and authorize managerial role
        // Modify warnings count based on behavior or admin action
        // Update user status if warnings exceed limits
        // Send updated response
    },

    // Upgrades a customer to VIP status or downgrades
    manageVIPStatus: (req, res) => {
        // Check user spending or order count
        // Update VIP status in database
        // Send success or error response
    },

    // Lists users based on criteria (role, status, etc.)
    listUsers: (req, res) => {
        // Authenticate and authorize managerial access
        // Fetch users from database based on criteria
        // Send list of users
    },

    // Handles complaints or compliments submitted about or by users
    handleUserFeedback: (req, res) => {
        // Authenticate user
        // Log feedback in the system
        // Notify involved parties or manager for further action
        // Update necessary user fields based on feedback outcome
    },

    // Resolves disputes concerning user complaints
    resolveDisputes: (req, res) => {
        // Authenticate and authorize managerial role
        // Decide on the dispute resolution
        // Update database based on resolution
        // Inform all parties involved
    },

    // Closes a user account
    closeUserAccount: (req, res) => {
        // Authenticate and check authorization
        // Remove user data from database or mark as closed
        // Handle any account balance or open orders
        // Send closure confirmation
    },

    // Handles deposit actions for user accounts
    manageUserDeposit: (req, res) => {
        // Authenticate and validate deposit amount
        // Update user's deposit balance in the database
        // Send success or error response
    }
};

module.exports = userController;














// const userController = {
//     getAllUsers: (req, res) => {
//         UserModel.find({}, (err, users) => {
//             if (err) {
//                 console.error('Error retrieving all users:', err);
//                 return res.status(500).json({ message: "Error fetching users." });
//             }
//             res.status(200).json(users);
//         });
//     },

//     registerUser: async (req, res) => {
//         try {
//             const newUser = new UserModel(req.body);
//             await newUser.save();
//             res.status(201).json({ message: 'User registered successfully' });
//         } catch (err) {
//             console.error('Error registering user:', err);
//             res.status(500).json({ message: "Error registering user." });
//         }
//     },

//     loginUser: async (req, res) => {
//         try {
//             const user = await UserModel.findOne({ email: req.body.email });
//             if (user && await user.comparePassword(req.body.password)) {
//                 const token = jwt.sign({ id: user._id, role: user.role }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
//                 res.status(200).json({ message: "Logged in successfully", token });
//             } else {
//                 res.status(401).json({ message: 'Invalid credentials' });
//             }
//         } catch (err) {
//             console.error('Error logging in user:', err);
//             res.status(500).json({ message: "Error logging in user." });
//         }
//     },

//     updateUser: (req, res) => {
//         UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
//             if (err) {
//                 console.error('Error updating user:', err);
//                 return res.status(500).json({ message: "Error updating user." });
//             }
//             if (!user) {
//                 return res.status(404).json({ message: 'User not found' });
//             }
//             res.status(200).json(user);
//         });
//     },

//     getUserById: (req, res) => {
//         UserModel.findById(req.params.id, (err, user) => {
//             if (err) {
//                 console.error('Error fetching user by ID:', err);
//                 return res.status(500).json({ message: "Error fetching user." });
//             }
//             if (!user) {
//                 return res.status(404).json({ message: 'User not found' });
//             }
//             res.status(200).json(user);
//         });
//     },

//     promoteUser: (req, res) => {
//         UserModel.findByIdAndUpdate(req.params.id, { $set: { role: 'VIP' } }, { new: true }, (err, user) => {
//             if (err) {
//                 console.error('Error promoting user:', err);
//                 return res.status(500).json({ message: "Error promoting user." });
//             }
//             if (!user) {
//                 return res.status(404).json({ message: 'User not found' });
//             }
//             res.status(200).json({ message: 'User was successfully promoted to VIP', user });
//         });
//     },

//     demoteUser: (req, res) => {
//         UserModel.findByIdAndUpdate(req.params.id, { $set: { role: 'customer' } }, { new: true }, (err, user) => {
//             if (err) {
//                 console.error('Error demoting user:', err);
//                 return res.status(500).json({ message: "Error demoting user." });
//             }
//             if (!user) {
//                 return res.status(404).json({ message: 'User not found' });
//             }
//             res.status(200).json({ message: 'User demoted successfully', user });
//         });
//     },

//     deleteUser: (req, res) => {
//         UserModel.findByIdAndRemove(req.params.id, (err) => {
//             if (err) {
//                 console.error('Error deleting user:', err);
//                 return res.status(500).json({ message: "Error deleting user." });
//             }
//             res.status(204).json({ message: 'User deleted' });
//         });
//     }
// };

// module.exports = userController;