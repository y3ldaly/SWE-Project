const express = require('express');
const router = express.Router();

// Get all orders
router.get('/', (req, res) => {
    res.json({ msg: "Get all orders" });
});

// Get a specific order
router.get('/:id', (req, res) => {
    res.json({ msg: "Get specific order details", orderId: req.params.id });
});

// Place a new order
router.post('/', (req, res) => {
    res.json({ msg: "Create a new order", orderDetails: req.body });
});

// Update an existing order
router.put('/:id', (req, res) => {
    res.json({ msg: "Update an order", orderId: req.params.id, updates: req.body });
});

// Delete an order
router.delete('/:id', (req, res) => {
    res.json({ msg: "Delete an order", orderId: req.params.id });
});

module.exports = router;
