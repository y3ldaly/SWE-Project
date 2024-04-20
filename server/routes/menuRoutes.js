const express = require(`express`)
const router = express.Router()

router.get(`/`, (req, res) => {
    res.json({mssg: "GET ALL MENUS"})
})

router.get(`/:id`, (req, res) => {
    res.json({mssg: "GET A FOOD ITEM"})
})

router.post(`/`, (req, res) => {
    res.json({mssg: "POST NEW FOOD ITEM"})
})

router.delete(`/:id`, (req, res) => {
    res.json({mssg: "DELETE A FOOD ITEM"})
})

router.patch(`/`, (req, res) => {
    res.json({mssg: "UPDATE AN ITEM"})
})

module.exports = router