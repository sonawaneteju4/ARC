const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceQouteSchema = new Schema(
    usename : {
        type: String,
        require : true
    }
    
)

module.exports = mongoose.model('serviceQoute', ServiceQouteSchema)
