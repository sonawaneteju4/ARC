const connectToMongo = require("./db.js");
const express = require("express");
const multer = require("multer");
const Gallery = require("./Models/Gallery");
require("dotenv").config();
const axios = require("axios");
const FormData = require("form-data");

connectToMongo();
var cors = require("cors");
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/contactus", require("./routes/client/contactus.js"));
app.use("/api/auth", require("./routes/client/auth.js"));
app.use("/api/authAdmin", require("./routes/admin/auth.js"));
app.use("/api/services", require("./routes/client/services.js"));
app.use("/api/gallery", require("./routes/client/gallery.js"));
app.use("/api/product", require("./routes/client/product.js"));
app.use("/api/cart", require("./routes/client/cart.js"));
app.use("/api/orders", require("./routes/client/Order.js"));
app.use("/api/userAddress", require("./routes/client/userAddress.js"));
app.post('/api/upload', upload.single('uploadimg'), async (req, res) => {
  try {
    // Check if a file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    // Process the image file here (e.g., save it to disk, upload to cloud storage, etc.)
    // Example: Save the image to disk
    const imageFile = req.file;
    const imageFilePath = 'path/to/uploaded/images/' + imageFile.originalname; // Change the path as needed
    // Save the file to the specified path
    // Example: fs.writeFileSync(imageFilePath, imageFile.buffer); // Requires 'fs' module

    // Send a success response to the frontend
    res.json({ success: true });
  } catch (error) {
    console.error('Error during image upload:', error);
    res.status(500).json({ error: 'Failed to upload the image' });
  }
});




app.get("/", (req, res) => {
  res.send("Welcome To Ar Coustom");
});


const start = async () => {
  try {
    await connectToMongo(process.env.MONGODB_URL);
    app.listen(
      PORT

      // () => {
      //   console.log(`Example app listening on port http://localhost:${PORT}`)
      //   // app.listen(PORT, "192.168.0.101")
      //   //     app.listen(PORT, "192.168.0.101")
      // }
    );
  } catch (error) {}
};

app.listen(PORT, () => {
  console.log(`Example app listening on port http://localhost:${PORT}`);
});
