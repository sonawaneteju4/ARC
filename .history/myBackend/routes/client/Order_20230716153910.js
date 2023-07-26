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
      const cart = await Cart.findOne({ user: userId });
  
      if (!cart) {
        return res.status(404).json({ error: "Cart not found" });
      }
  
      let total = cart.total;
      let shippingCharges = 0;
  
      if (total >= 0) {
        // Apply shipping charges of 50 Rs
        shippingCharges = 0;
        total += shippingCharges;
      }
  
      // Set the default status to "pending"
      const orderStatus = "pending";
  
      // Create the new order
      const order = new Order({
        user: userId,
        items: cart.items.map((item) => ({
          productId: item.productId,
          brand: item.brand,
          device: item.device,
          quantity: item.quantity,
          price: item.price,
        })),
        address: userAddress,
        shippingCharges: shippingCharges,
        total: total,
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


  router.get("/order/:orderId", featchuser ,async(req, res)=>{
    try {
        const orderId = req.params.orderId;
        const order = await Order.findById(orderId).populate("user", "name email");

        if(!order){
            return res.status(400).json({error : "Order Not Found"})
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
  })


  router.get("/orderhistory", featchuser ,async(req, res)=>{
    try {
        const userId = req.params.user;
        const orders = await Order.find({user: userId})
        res.json(orders);
        console.log(orders)
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
  })




module.exports = router;