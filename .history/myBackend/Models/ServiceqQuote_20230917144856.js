const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceQouteSchema = new Schema({
    name : {
        type: String,
        require : true
    },
    vehicle: {
        ty
    }
    }
)

module.exports = mongoose.model('serviceQoute', ServiceQouteSchema)
