const express = require('express');
const router = express.Router();

// Might not be needed
router.get('/users', (req, res) => {
    res.json({ msg: "Return a list of all registered users" });
});

router.get('/users/:id', (req, res) => {
    res.json({ msg: "Return a user's details", userId: req.params.id });
});

router.post('/users/register', (req, res) => {
    res.json({ msg: "Register a new user", userDetails: req.body });
});

router.post('/users/login', (req, res) => {
    res.json({ msg: "Authenticate a user and issue a token", userDetails: req.body });
});

router.put('/users/:id', (req, res) => {
    res.json({ msg: "Update user's profile or status", userId: req.params.id, userDetails: req.body });
});

router.put('/users/:id/promote', (req, res) => {
    res.json({ msg: "Promote a user based on positive feedback or VIP status qualification", userId: req.params.id, userDetails: req.body });
});

router.put('/users/:id/demote', (req, res) => {
    res.json({ msg: "Demote a user based on negative feedback or warnings", userId: req.params.id, userDetails: req.body });
});

router.delete('/users/:id', (req, res) => {
    res.json({ msg: "Delete a user's account", userId: req.params.id });
});

module.exports = router;
