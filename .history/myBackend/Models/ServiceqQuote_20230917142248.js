const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceQouteSchema = new Schema(
    uxname : {
        type: String,
        require : true
    }
    
)

module.exports = mongoose.model('serviceQoute', ServiceQouteSchema)
