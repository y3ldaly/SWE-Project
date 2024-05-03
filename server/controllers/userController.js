const UserModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
    getAllUsers: (req, res) => {
        UserModel.find({}, (err, users) => {
            if (err) {
                console.error('Error retrieving all users:', err);
                return res.status(500).json({ message: "Error fetching users." });
            }
            res.status(200).json(users);
        });
    },

    registerUser: async (req, res) => {
        try {
            const newUser = new UserModel(req.body);
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (err) {
            console.error('Error registering user:', err);
            res.status(500).json({ message: "Error registering user." });
        }
    },

    loginUser: async (req, res) => {
        try {
            const user = await UserModel.findOne({ email: req.body.email });
            if (user && await user.comparePassword(req.body.password)) {
                const token = jwt.sign({ id: user._id, role: user.role }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
                res.status(200).json({ message: "Logged in successfully", token });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (err) {
            console.error('Error logging in user:', err);
            res.status(500).json({ message: "Error logging in user." });
        }
    },

    updateUser: (req, res) => {
        UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
            if (err) {
                console.error('Error updating user:', err);
                return res.status(500).json({ message: "Error updating user." });
            }
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        });
    },

    getUserById: (req, res) => {
        UserModel.findById(req.params.id, (err, user) => {
            if (err) {
                console.error('Error fetching user by ID:', err);
                return res.status(500).json({ message: "Error fetching user." });
            }
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        });
    },

    promoteUser: (req, res) => {
        UserModel.findByIdAndUpdate(req.params.id, { $set: { role: 'VIP' } }, { new: true }, (err, user) => {
            if (err) {
                console.error('Error promoting user:', err);
                return res.status(500).json({ message: "Error promoting user." });
            }
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User was successfully promoted to VIP', user });
        });
    },

    demoteUser: (req, res) => {
        UserModel.findByIdAndUpdate(req.params.id, { $set: { role: 'customer' } }, { new: true }, (err, user) => {
            if (err) {
                console.error('Error demoting user:', err);
                return res.status(500).json({ message: "Error demoting user." });
            }
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json({ message: 'User demoted successfully', user });
        });
    },

    deleteUser: (req, res) => {
        UserModel.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                console.error('Error deleting user:', err);
                return res.status(500).json({ message: "Error deleting user." });
            }
            res.status(204).json({ message: 'User deleted' });
        });
    }
};

module.exports = userController;