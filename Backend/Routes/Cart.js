const express = require('express');
const router = express.Router();
const auth = require('../middleWare/auth')
const cartController = require('../Controller/Cart')
router.post("/addtocart/:id",[auth],cartController.addCart)
router.get("/viewcart",[auth],cartController.viewCart)
router.delete("/deletecart",[auth],cartController.deleteCart)
router.delete("/deleteitem/:id",[auth],cartController.deleteItem)
router.delete("/deleteitembyone/:id",[auth],cartController.decrement)
module.exports = router;