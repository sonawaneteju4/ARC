const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceQouteSchema = new Schema({
    name : {
        type: String,
        require : true
    },
    vechile
    }
)

module.exports = mongoose.model('serviceQoute', ServiceQouteSchema)
