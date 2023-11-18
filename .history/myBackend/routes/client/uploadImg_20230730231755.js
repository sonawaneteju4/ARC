// server.js

const express = require('express');
const axios = require('axios');
const FormData = require('form-data');

const app = express();

app.use(express.json());

app.post('/uploadImg', async (req, res) => {
  try {
    const formData = new FormData();
    formData.append('file', req.body.uploadimg);
    formData.append('upload_present', 'xa6ozlcs');

    const cloudinaryResponse = await axios.post('https://res.cloudinary.com/dcatujmtp/image/upload', formData, {
      headers: formData.getHeaders(),
    });

    // Send the Cloudinary response back to the frontend
    res.json(cloudinaryResponse.data);
  } catch (error) {
    console.error('Error during image upload:', error);
    res.status(500).json({ error: 'Failed to upload the image' });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
