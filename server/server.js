require('dotenv').config();  // Load environment variables
const express = require('express');  // Import express
const mongoose = require(`mongoose`); 


// Import routes
const MenuRoutes = require('./routes/menuRoutes');
const OrderRoutes = require('./routes/orderRoutes');
const UserRoutes = require('./routes/userRoutes');

const app = express();  // Create an express application

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

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        // Set the server to listen on a port
    app.listen(process.env.PORT, () => {
    console.log('Server listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


