const mongoose = require("mongoose");
require("dotenv").config()

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@arcoustoms.b8laqqp.mongodb.net/${process.env.DB_NAME}`;
 
const connectToMongo = () =>{
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      })
      .then(() => {
        console.log("Connection Done");
      })
      .catch(() => {
        console.log(" Err ");
      });
}
mongoose.set('strictQuery', true);

module.exports = connectToMongo ;