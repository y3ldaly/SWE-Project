require('dotenv').config() // Loads environment variables

const express = require('express') // Import express
const mongoose = require('mongoose') // Import Mongoose

// Import routes
const MenuRoutes = require('./routes/menuRoutes');
const OrderRoutes = require('./routes/orderRoutes');
const UserRoutes = require('./routes/userRoutes');

// Create express app
const app = express();

// Middleware
app.use(express.json());  // Handle JSON payloads
app.use((req, res, next) => {  // Example of a logging middleware
    console.log(req.path, req.method);
    next();
});

// Routes
app.use('/api/menus', MenuRoutes);
app.use('/api/orders', OrderRoutes);
app.use('/api/users', UserRoutes);

// It's async (takes a while to process) so it returns a promise
mongoose.connect(process.env.MONG_URL)
    .then(() => {
        // Set the server to listen on a port
        app.listen(process.env.PORT, () => {
        console.log('Connected to DB. Server listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })