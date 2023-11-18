const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceQouteSchema = new Schema({
    name : {
        type: String,
        require : true
    },
    vehicle: {
        type : String,
        
    }
    }
)

module.exports = mongoose.model('serviceQoute', ServiceQouteSchema)
