const express = require('express');
const router = express.Router();
const auth = require('../middleWare/auth')
const orderController = require('../Controller/Order')
router.post("/addorder/:id",[auth],orderController.addOrder)
router.get("/vieworder",[auth],orderController.viewOrder)
router.get("/vieworderDetails/:id",[auth],orderController.viewOrderDetails)
module.exports = router;