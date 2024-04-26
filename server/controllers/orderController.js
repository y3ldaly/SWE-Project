const OrderModel = require('../models/Order');

const orderController = {
    getAllOrders: (req, res) => {
        OrderModel.find({}, (err, orders) => {
            if (err) {
                console.error('Error retrieving orders:', err);
                return res.status(500).json({ message: "Internal server error while fetching orders." });
            }
            res.status(200).json(orders);
        });
    },

    getOrderById: (req, res) => {
        OrderModel.findById(req.params.id, (err, order) => {
            if (err) {
                console.error('Error finding order:', err);
                return res.status(500).json({ message: "Internal server error while finding the order." });
            }
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        });
    },

    createOrder: (req, res) => {
        const newOrder = new OrderModel(req.body);
        newOrder.save((err, order) => {
            if (err) {
                console.error('Error creating order:', err);
                return res.status(500).json({ message: "Internal server error while creating the order." });
            }
            res.status(201).json(order);
        });
    },

    updateOrder: (req, res) => {
        OrderModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, order) => {
            if (err) {
                console.error('Error updating order:', err);
                return res.status(500).json({ message: "Internal server error while updating the order." });
            }
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            res.status(200).json(order);
        });
    },

    freezeOrder: (req, res) => {
        OrderModel.findById(req.params.id, (err, order) => {
            if (err) {
                console.error('Error freezing order:', err);
                return res.status(500).json({ message: "Internal server error while freezing the order." });
            }
            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }
            if (order.status === 'completed' || order.status === 'cancelled') {
                return res.status(400).json({ message: 'Completed or cancelled orders cannot be frozen.' });
            }
            order.status = 'frozen';
            order.save((err, updatedOrder) => {
                if (err) {
                    console.error('Error saving frozen order:', err);
                    return res.status(500).json({ message: "Internal server error while saving the frozen order." });
                }
                res.status(200).json({ message: 'Order has been frozen', order: updatedOrder });
            });
        });
    },

    cancelOrder: (req, res) => {
        OrderModel.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                console.error('Error cancelling order:', err);
                return res.status(500).json({ message: "Internal server error while cancelling the order." });
            }
            res.status(204).send({ message: 'Order canceled' });
        });
    }
};

module.exports = orderController;