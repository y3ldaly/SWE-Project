const express = require('express');
const router = express.Router();

router.get('/orders', (req, res) => {
    res.json({ msg: "Return all orders" });
});

router.get('/orders/:id', (req, res) => {
    res.json({ msg: "Retrieve details of an order", orderId: req.params.id });
});

router.post('/orders', (req, res) => {
    res.json({ msg: "Create a new order", orderDetails: req.body });
});

router.put('/orders/:id', (req, res) => {
    res.json({ msg: "Update an order", orderId: req.params.id, updates: req.body });
});

router.put('/orders/:id/freeze', (req, res) => {
    res.json({ msg: "Freeze an order due to insufficient funds", orderId: req.params.id });
});

router.delete('/orders/:id', (req, res) => {
    res.json({ msg: "Cancel an order", orderId: req.params.id });
});

module.exports = router;
