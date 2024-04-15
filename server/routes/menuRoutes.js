const express = require(`express`)

const router = express.Router()

//GET 
router.get(`/`, (req, res) => {
    res.json({mssg: "Get all menus"})
})

//GET A SINGLE FOOD ITEM
router.get(`/:id`, (req, res) => {
    res.json({mssg: "Get a food item"})
})

//POST 
router.post(`/`, (req, res) => {
    res.json({mssg: "POST NEW FOOD ITEM"})
})

//DELETE
router.delete(`/:id`, (req, res) => {
    res.json({mssg: "DELETE A FOOD ITEM"})
})

//UPDATE
router.patch(`/`, (req, res) => {
    res.json({mssg: "UPDATE AN ITEM"})
})

module.exports = router