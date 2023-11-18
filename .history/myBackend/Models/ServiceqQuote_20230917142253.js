const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceQouteSchema = new Schema(
    userName : {
        type: String,
        require : true
    }
    
)

module.exports = mongoose.model('serviceQoute', ServiceQouteSchema)
