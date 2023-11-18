const mongoose = require("mongoose");
const { Schema } = mongoose;

const ServiceQouteSchema = new Schema({
    name : {
        type: String,
        require : true
    },
    vehicleType: {
        type : String,
        enum: {
            values: ["mat", "gloss", "ppf"],
            message: "{VALUE} is Not Supported",
          },

    }
    }
)

module.exports = mongoose.model('serviceQoute', ServiceQouteSchema)
