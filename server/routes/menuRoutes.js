const express = require(`express`)
const router = express.Router()

// Here you might implement some logic to handle query parameters for filtering
router.get(`/menu`, (req, res) => {
    res.json({mssg: "Return the entire menu"})
})

router.post('/menu', (req, res) => {
    res.json({ msg: "Add a new dish to the menu", dishDetails: req.body });
});

router.put('/menu/:id', (req, res) => {
    res.json({ msg: "Update details of an existing dish", dishId: req.params.id, updates: req.body });
});

router.delete('/menu/:id', (req, res) => {
    res.json({ msg: "Remove a dish from the menu", dishId: req.params.id });
});

module.exports = router;