const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema(
  {
    orderId: {
      type: String,
      unique: true,
      required: true,
      default: function () {
        return (
          "ARC" + (10000 + parseInt(this._id.toHexString(), 8)).toString()
        );
      },
    },
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
          required: true,
        },
        device: {
          type: String,
          required: true,
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
    total: {
      type: Number,
      required: true,
      min: 0,
    },
    discount: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true }
);

OrderSchema.pre("save", async function (next) {
  if (!this.orderId) {
    const count = await this.model("order").countDocuments();
    const orderId = 100000 + count;
    this.orderId = "ARC" + Math.min(orderId, 99999999);
  }
  next();
});

module.exports = mongoose.model("order", OrderSchema);
