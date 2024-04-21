// Import the User model to interact with the database.
const UserModel = require('../models/User');

// Import bcryptjs to hash passwords before saving them to the database.
const bcrypt = require('bcryptjs');

// Import jsonwebtoken to create tokens that allow users to stay logged in.
const jwt = require('jsonwebtoken');

// Create an object to hold all functions that handle user-related requests.
const userController = {
    // Function to get and send a list of all users.
    getAllUsers: (req, res) => {
        UserModel.find({}, (err, users) => {
            if (err) return res.status(500).send(err); // If there's an error, send a server error message.
            res.status(200).json(users); // Otherwise, send all users' data.
        });
    },

    // Function to handle user registration.
    registerUser: async (req, res) => {
        try {
            // Hash the user's password.
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            // Create a new user with the hashed password and other data from the request body.
            const newUser = new UserModel({...req.body, password: hashedPassword});
            // Save the new user to the database.
            await newUser.save();
            // Send a success message.
            res.status(201).send('User registered successfully');
        } catch (err) {
            // If there's an error during this process, send an error message.
            res.status(500).send(err);
        }
    },

    // Function to handle user login.
    loginUser: async (req, res) => {
        // Find a user by their email.
        const user = await UserModel.findOne({ email: req.body.email });
        // Check if the user exists and the password is correct.
        if (user && await bcrypt.compare(req.body.password, user.password)) {
            // Create a token with the user's ID and role.
            const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
            // Send the token with a success message.
            res.json({ message: "Logged in successfully", token });
        } else {
            // If the credentials are wrong, send an error message.
            res.status(400).send('Invalid credentials');
        }
    },

    // Function to update a user's data.
    updateUser: (req, res) => {
        // Update the user by their ID with new data from the request body.
        UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, user) => {
            if (err) return res.status(500).send(err); // If there's an error, send an error message.
            res.status(200).json(user); // Otherwise, send the updated user data.
        });
    },

    // Function to get a single user by their ID.
    getUserById: (req, res) => {
        UserModel.findById(req.params.id, (err, user) => {
            if (err) return res.status(500).send(err); // If there's an error, send an error message.
            if (!user) return res.status(404).send('User not found'); // If no user is found, send a not found message.
            res.status(200).json(user); // Otherwise, send the user's data.
        });
    },

    // Function to promote a user to VIP status.
    promoteUser: (req, res) => {
        const id = req.params.id;
        // Update the user's role to 'VIP'.
        UserModel.findByIdAndUpdate(id, { $set: { role: 'VIP' } }, { new: true }, (err, user) => {
            if (err) return res.status(500).send(err); // If there's an error, send an error message.
            if (!user) return res.status(404).send('User not found'); // If no user is found, send a not found message.
            res.status(200).json({ message: 'User promoted successfully', user }); // Otherwise, send a success message.
        });
    },

    // Function to demote a user from VIP back to customer.
    demoteUser: (req, res) => {
        const id = req.params.id;
        // Update the user's role to 'customer'.
        UserModel.findByIdAndUpdate(id, { $set: { role: 'customer' } }, { new: true }, (err, user) => {
            if (err) return res.status(500).send(err); // If there's an error, send an error message.
            if (!user) return res.status(404).send('User not found'); // If no user is found, send a not found message.
            res.status(200).json({ message: 'User demoted successfully', user }); // Otherwise, send a success message.
        });
    },

    // Function to delete a user from the database.
    deleteUser: (req, res) => {
        UserModel.findByIdAndRemove(req.params.id, (err) => {
            if (err) return res.status(500).send(err); // If there's an error, send an error message.
            res.status(204).send('User deleted'); // Otherwise, send a success message indicating the user was deleted.
        });
    }
};

// Make this userController available to other parts of the application.
module.exports = userController;
