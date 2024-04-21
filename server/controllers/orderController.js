// Import the Order model so we can interact with the database about orders.
const OrderModel = require('../models/Order');

// This object contains functions that handle requests related to orders.
const orderController = {
    // Get a list of all orders from the database.
    getAllOrders: (req, res) => {
        OrderModel.find({}, (err, orders) => {
            if (err) return res.status(500).send(err); // If an error happens, send a server error message.
            res.status(200).json(orders); // If no error, send back all the orders in JSON format.
        });
    },

    // Get details of a specific order by its ID.
    getOrderById: (req, res) => {
        OrderModel.findById(req.params.id, (err, order) => {
            if (err) return res.status(500).send(err); // If an error happens, send a server error message.
            if (!order) return res.status(404).send('Order not found'); // If no order found, send a not found message.
            res.status(200).json(order); // If found, send back the order details.
        });
    },

    // Create a new order and save it to the database.
    createOrder: (req, res) => {
        const newOrder = new OrderModel(req.body); // Create a new order using data from the request.
        newOrder.save((err, order) => { // Save the new order to the database.
            if (err) return res.status(500).send(err); // If an error happens, send a server error message.
            res.status(201).json(order); // If saved successfully, send back the newly created order.
        });
    },

    // Update details of an existing order.
    updateOrder: (req, res) => {
        OrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, order) => {
            if (err) return res.status(500).send(err); // If an error happens, send a server error message.
            res.status(200).json(order); // If update is successful, send back the updated order.
        });
    },

    // Temporarily freeze an order due to issues like payment.
    freezeOrder: (req, res) => {
        OrderModel.findById(req.params.id, (err, order) => {
            if (err) return res.status(500).send(err); // If an error happens, send a server error message.
            if (!order) return res.status(404).send('Order not found'); // If no order found, send a not found message.
            order.status = 'frozen'; // Update the order's status to 'frozen'.
            order.save((err, updatedOrder) => { // Save the updated order.
                if (err) return res.status(500).send(err); // If an error happens, send a server error message.
                res.status(200).json({ message: 'Order has been frozen', order: updatedOrder }); // If successful, send back the updated order.
            });
        });
    },

    // Cancel an order and remove it from the database.
    cancelOrder: (req, res) => {
        OrderModel.findByIdAndRemove(req.params.id, (err) => {
            if (err) return res.status(500).send(err); // If an error happens, send a server error message.
            res.status(204).send('Order canceled'); // If cancellation is successful, send a success message.
        });
    }
};

// Make the orderController available for other files to use.
module.exports = orderController;
