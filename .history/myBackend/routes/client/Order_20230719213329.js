const express = require("express");
const router = express.Router();
const Cart = require("../../Models/Cart");
const Order = require("../../Models/Order");
var featchuser = require("../../middleware/client/fetchuser");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: 'help.arcustoms@gmail.com',
    pass: 'Tejas@123'
  }
});


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

    const orderStatus = "pending";

    const userEmail = req.user.email;
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
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"help.arcustoms@gmail.com', // sender address
        to: userEmail, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      //
      // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
      //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
      //       <https://github.com/forwardemail/preview-email>
      //
    }
    
    main().catch(console.error);


    await Cart.findByIdAndDelete(cartId);

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/order/:orderId", featchuser, async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId).populate("user", "name email");

    if (!order) {
      return res.status(400).json({ error: "Order Not Found" });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/orderhistory", featchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    let orders = await Order.find({ user: userId });

    // If a single order is returned, convert it to an array
    if (!Array.isArray(orders)) {
      orders = [orders];
    }

    res.json(orders);
    console.log(orders);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
