const express = require("express");
const router = express.Router();
const Cart = require('../../Models/Cart')
const Order = require('../../Models/Order')
var featchuser = require('../../middleware/client/fetchuser');


router.post("/placeorder", featchuser, async (req, res) => {
    try {
      const userId = req.user.id;
      const { cartId, userAddress } = req.body;
  
      // Find the user's cart
      const cart = await Cart.F({ user: userId });
  
      if (!cart) {
        return res.status(404).json({ error: "Cart not found" });
      }
  
      // Set the default status to "pending"
      const orderStatus = "pending";
  
      // Create the new order
      const order = new Order({
        user: userId,
        items: cart.items.map((item) => ({
          productId: item.productId,
          brand: item.productId.brand,
          device: item.productId.device,
          quantity: item.quantity,
          price: item.price,
        })),
        address: userAddress,
        shippingCharges: cart.shippingCharges,
        discount: cart.discount,
        total: cart.total,
        status: orderStatus,
      });
  
      await order.save();
  
      // Delete the cart after creating the order
      await Cart.findByIdAndDelete(cartId);
  
      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  




module.exports = router;