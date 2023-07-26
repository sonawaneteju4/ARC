const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        brand: {
          type: String,
        },
        device: {
          type: String,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],
    address: {
      line1: {
        type: String,
        required: true,
      },
      line2: {
        type: String,
      },
      city: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      pincode: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
      addType: {
        type: String,
        enum: ["default", "home", "other"],
        default: "default",
      },
    },
    shippingCharges: {
      type: Number,
      required: true,
      min: 0,
    },
    offer: {
      type: Number,
    },
    total: {
      type: Number,
      required: true,
      min: 0,
    },
  }, { timestamps: true });
  
  module.exports = mongoose.model("order", OrderSchema);
  


module.exports = mongoose.model("cart", CartSchema);
