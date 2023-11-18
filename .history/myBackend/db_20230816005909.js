const mongoose = require("mongoose");
require("dotenv").config()

const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@arcoustoms.b8laqqp.mongodb.net/${process.env.DB_NAME}`;
 
const connectToMongo = () =>{
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },{
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      }await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 })
      .then(() => {
        console.log("Connection Done");
      })
      .catch(() => {
        console.log(" Err ");
      });
}
mongoose.set('strictQuery', true);

module.exports = connectToMongo ;