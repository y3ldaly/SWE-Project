const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ msg: "List of all registered users" });
});

// Get a specific user
router.get('/:id', (req, res) => {
    res.json({ msg: "Get user details", userId: req.params.id });
});

router.post('/', (req, res) => {
    res.json({ msg: "Register a new user", userDetails: req.body });
});

router.put('/:id', (req, res) => {
    res.json({ msg: "Update user details", userId: req.params.id, updates: req.body });
});

router.delete('/:id', (req, res) => {
    res.json({ msg: "Delete a user", userId: req.params.id });
});

module.exports = router;