const express = require("express");
const router = express.Router();
const Cart = require('../../Models/Cart')
const Order = require('../../Models/Order')
var featchuser = require('../../middleware/client/fetchuser');


router.post("/placeorder", auth, async (req, res) => {
    try {
      const userId = req.user.id;
      const { items, address, shippingCharges, discount } = req.body;
  
      // Create the new order
      const order = new Order({
        user: userId,
        items,
        address,
        shippingCharges,
        discount,
        status: "pending",
      });
  
      // Save the order to the database
      await order.save();
  
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  





module.exports = router;