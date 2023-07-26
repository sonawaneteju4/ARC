const express = require("express");
const router = express.Router();
const Cart = require('../../Models/Cart')
var featchuser = require('../../middleware/client/fetchuser');
const fetchuser = require("../../middleware/client/fetchuser");



router.get("/cartuser", featchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      res.status(404).json({ error: "Cart not found" }); // return a 404 error if the cart is not found
    } else {
      res.json(cart); // return the cart as JSON
    }
  } catch (error) {
    console.error(error.message);
    console.log(error)
    res.status(500).json({ error: "Internal Server Error" });
  }
});



router.post("/addtocart", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const { productId, quantity, price, brand, device } = req.body;
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      const newCart = new Cart({
        user: userId,
        items: [{ productId, quantity, price, brand, device }],
        total: price * quantity,
      });
      await newCart.save();
      res.json(newCart);
    } else {
      const existingItemIndex = cart.items.findIndex(
        (item) => item.productId === productId
      );
      if (existingItemIndex === -1) {
        cart.items.push({ productId, quantity, price, brand, device });
      } else {
        const existingItem = cart.items[existingItemIndex];
        const oldQuantity = existingItem.quantity;
        existingItem.quantity = quantity;
        existingItem.price = price;
        cart.total += price * (quantity - oldQuantity);
      }

      // Calculate shipping charges based on the number of items in the cart
      if (cart.items.length > 2) {
        // Free shipping
        cart.shippingCharges = 0;
      } else {
        // Shipping charges of 50 Rs
        cart.shippingCharges = 50;
      }

      // Recalculate the total including shipping charges
      cart.total += cart.shippingCharges;

      await cart.save();
      res.json(cart);
    }

    // Set the default status to "pending"
    const orderStatus = "pending";

    // Create the new order
    const order = new Order({
      user: userId,
      items: cart.items,
      address: cart.address,
      shippingCharges: cart.shippingCharges,
      offer: cart.offer,
      total: cart.total,
      status: orderStatus,
    });

    await order.save();

    // Delete the cart after creating the order
    await Cart.findOneAndDelete({ user: userId });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
});




  router.delete("/removefromcart/:itemId", featchuser, async(req, res)=>{
    try {
      const userId = req.user.id;
      const itemId = req.params.itemId;
      const cart = await Cart.findOne({ user: userId });
      if (!cart) {
        res.status(404).json({ error: "Cart not found" });
      } else {
        const item = cart.items.find(i => i._id.toString() === itemId);
        if (!item) {
          res.status(404).json({ error: "Item not found in cart" });
        } else {
          const itemTotal = item.quantity * item.price;
          cart.items = cart.items.filter(i => i._id.toString() !== itemId);
          cart.total -= itemTotal;
          await cart.save();
          res.json(cart);
        }
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  })
  

  router.put("/updatecart/:itemId", fetchuser, async (req, res) => {
    try {
      const userId = req.user.id;
      const itemId = req.params.itemId;
      const { quantity } = req.body;
      const cart = await Cart.findOne({ user: userId });
        if (!cart) {
          res.status(404).json({ error: "Cart not found" });
        } else {
        const item = cart.items.find((i) => i._id.toString() === itemId);
        if (!item) {
          res.status(404).json({ error: "Item not found in cart" });
        } else {
          const oldQuantity = item.quantity;
          item.quantity = quantity;
          const itemTotal = item.price * quantity;
          cart.total += itemTotal - item.price * oldQuantity;
          await cart.save();
          res.json(cart);
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

  router.delete("/deletecart/:id", fetchuser, async (req, res) => {
    try {
      const userId = req.user.id;
      const cart = await Cart.findOneAndDelete({ user: userId });
      if (!cart) {
        res.status(404).json({ error: "Cart not found" });
      } else {
        res.json({ message: "Cart deleted successfully" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  

module.exports = router;