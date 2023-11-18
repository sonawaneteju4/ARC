import { useState } from 'react';
import axios from "axios";
const HandleUpload = () => {
  const [img, setImg] = useState('');
  const [uploadImg, setUploadImg] = useState('');

  const uploadFile = () => {
    console.log(uploadImg); // Check if the selected image is logged correctly
    if (!uploadImg) {
      console.error('No image file selected');
      return;
    }

    const formData = new FormData();
    formData.append('uploadimg', uploadImg, uploadImg.name); // Make sure to set the 'name' property correctly
    fetch('http://localhost:5000/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        const cloudinaryResponse =  axios.post('https://api.cloudinary.com/v1_1/dcatujmtp/image/upload', formData, {
          headers: formData.getHeaders(),
        });
        response.json(cloudinaryResponse.data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error response from server:', error);
      });
  };

  return (
    <div className="top-28 mt-28">
      <input
        type="file"
        onChange={(e) => {
          setUploadImg(e.target.files[0].name); // Update the uploadImg state correctly
        }}
      />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default HandleUpload;
