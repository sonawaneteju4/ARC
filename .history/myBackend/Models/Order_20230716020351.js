const mongoose = require("mongoose");
const { Schema } = mongoose;

module.exports = mongoose.model("cart", CartSchema);
