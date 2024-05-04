const OrderModel = require('../models/orderModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

/*
    Essentials:
                - placeOrder
                - updateOrder?
                - cancelOrder
                - getOrderDetails
                - processPayment
*/

const orderController = {
    
    // Place a new order
    placeOrder: (req, res) => {
        // Validate the incoming order data
        // Check customer's balance if needed (for dine-in or delivery)
        // Create a new order in the database with status 'new'
        // If balance is insufficient, set status to 'frozen'
        // Deduct payment from customer's account if pre-payment is required
        // Send response with order details and status
    },

    // Update an existing order
    updateOrder: (req, res) => {
        // Authenticate and authorize user
        // Validate new order data
        // Find the existing order and update it
        // If updating to 'completed', handle payment and tipping if not already done
        // Send updated order details
    },

    // Cancel an order
    cancelOrder: (req, res) => {
        // Authenticate user
        // Find the order and verify it can be canceled (e.g., not already delivered)
        // Update the order status to 'canceled'
        // Refund any payments made if applicable
        // Update inventory or availability if required
        // Send success or failure response
    },

    // Retrieve details of a specific order
    getOrderDetails: (req, res) => {
        // Authenticate user
        // Fetch the order from the database using the order ID
        // Check if the user has permission to view the order
        // Return order details
    },

    // List all orders for a customer or manager
    listOrders: (req, res) => {
        // Authenticate and authorize user (manager or the specific customer)
        // Fetch all relevant orders from the database based on the user role
        // Optionally apply filters based on status or date
        // Return the list of orders
    },

    // Handle payment for an order
    processPayment: (req, res) => {
        // Validate payment information
        // Check order status and ensure it's ready for payment
        // Process the payment transaction
        // Update the order status to 'completed' upon successful payment
        // Send payment confirmation
    },

    // Handle the freezing and unfreezing of orders
    manageOrderFreezing: (req, res) => {
        // Check order cost versus customer account balance
        // Freeze or unfreeze the order based on funds availability
        // Update the order status accordingly
        // Notify the customer of the order status change
    }
};

module.exports = orderController;
















// const orderController = {
//     getAllOrders: (req, res) => {
//         OrderModel.find({}, (err, orders) => {
//             if (err) {
//                 console.error('Error retrieving orders:', err);
//                 return res.status(500).json({ message: "Internal server error while fetching orders." });
//             }
//             res.status(200).json(orders);
//         });
//     },

//     getOrderById: (req, res) => {
//         OrderModel.findById(req.params.id, (err, order) => {
//             if (err) {
//                 console.error('Error finding order:', err);
//                 return res.status(500).json({ message: "Internal server error while finding the order." });
//             }
//             if (!order) {
//                 return res.status(404).json({ message: 'Order not found' });
//             }
//             res.status(200).json(order);
//         });
//     },

//     createOrder: (req, res) => {
//         const newOrder = new OrderModel(req.body);
//         newOrder.save((err, order) => {
//             if (err) {
//                 console.error('Error creating order:', err);
//                 return res.status(500).json({ message: "Internal server error while creating the order." });
//             }
//             res.status(201).json(order);
//         });
//     },

//     updateOrder: (req, res) => {
//         OrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, order) => {
//             if (err) {
//                 console.error('Error updating order:', err);
//                 return res.status(500).json({ message: "Internal server error while updating the order." });
//             }
//             if (!order) {
//                 return res.status(404).json({ message: 'Order not found' });
//             }
//             res.status(200).json(order);
//         });
//     },

//     freezeOrder: (req, res) => {
//         OrderModel.findById(req.params.id, (err, order) => {
//             if (err) {
//                 console.error('Error freezing order:', err);
//                 return res.status(500).json({ message: "Internal server error while freezing the order." });
//             }
//             if (!order) {
//                 return res.status(404).json({ message: 'Order not found' });
//             }
//             if (order.status === 'completed' || order.status === 'cancelled') {
//                 return res.status(400).json({ message: 'Completed or cancelled orders cannot be frozen.' });
//             }
//             order.status = 'frozen';
//             order.save((err, updatedOrder) => {
//                 if (err) {
//                     console.error('Error saving frozen order:', err);
//                     return res.status(500).json({ message: "Internal server error while saving the frozen order." });
//                 }
//                 res.status(200).json({ message: 'Order has been frozen', order: updatedOrder });
//             });
//         });
//     },

//     cancelOrder: (req, res) => {
//         OrderModel.findByIdAndRemove(req.params.id, (err) => {
//             if (err) {
//                 console.error('Error cancelling order:', err);
//                 return res.status(500).json({ message: "Internal server error while cancelling the order." });
//             }
//             res.status(204).send({ message: 'Order canceled' });
//         });
//     }
// };

// module.exports = orderController;