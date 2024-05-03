const TransactionModel = require('../models/transactionModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Controller for handling payment operations
const paymentController = {
    // Retrieve all payments from the database
    getAllPayments: (req, res) => {
        PaymentModel.find({})
            .populate('customer')
            .populate('order')
            .exec((err, payments) => {
                if (err) {
                    console.error('Error retrieving all payments:', err);
                    return res.status(500).json({ message: "Internal server error while fetching payments." });
                }
                res.status(200).json(payments);
            });
    },

    // Retrieve a single payment by its ID
    getPaymentById: (req, res) => {
        PaymentModel.findById(req.params.id)
            .populate('customer')
            .populate('order')
            .exec((err, payment) => {
                if (err) {
                    console.error('Error retrieving payment:', err);
                    return res.status(500).json({ message: "Internal server error while fetching the payment." });
                }
                if (!payment) {
                    return res.status(404).json({ message: 'Payment not found' });
                }
                res.status(200).json(payment);
            });
    },

    // Create a new payment and save it to the database
    createPayment: (req, res) => {
        const newPayment = new PaymentModel({
            customer: req.body.customer,
            order: req.body.order,
            amount: req.body.amount,
            method: req.body.method,
            transactionId: req.body.transactionId, // Assume client sends a valid unique ID
            paymentDate: req.body.paymentDate || Date.now(), // Use provided date or default to now
        });

        newPayment.save((err, payment) => {
            if (err) {
                console.error('Error creating payment:', err);
                return res.status(500).json({ message: "Internal server error while creating payment." });
            }
            res.status(201).json(payment);
        });
    },

    // Update payment status or details
    updatePayment: (req, res) => {
        const updateData = {
            status: req.body.status,
            amount: req.body.amount, // Allow updates to amount if necessary
        };

        PaymentModel.findByIdAndUpdate(req.params.id, updateData, { new: true }, (err, payment) => {
            if (err) {
                console.error('Error updating payment:', err);
                return res.status(500).json({ message: "Internal server error while updating payment." });
            }
            if (!payment) {
                return res.status(404).json({ message: 'Payment not found' });
            }
            res.status(200).json(payment);
        });
    },

    // Handle payment deletion (e.g., for erroneous entries)
    deletePayment: (req, res) => {
        PaymentModel.findByIdAndRemove(req.params.id, (err) => {
            if (err) {
                console.error('Error deleting payment:', err);
                return res.status(500).json({ message: "Internal server error while deleting payment." });
            }
            res.status(204).json({ message: 'Payment deleted' });
        });
    }
};

// Export the payment controller to be used in route definitions
module.exports = paymentController;
