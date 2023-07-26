const mongoose  = require("mongoose");
const { Schema } = mongoose;

const AdminSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    phone : {
        type: String,
        required: true
    },
     date : {
        type: String,
        default: Date.now()
    }
})

const User = mongoose.model('user', UserSchema)
module.exports = User;