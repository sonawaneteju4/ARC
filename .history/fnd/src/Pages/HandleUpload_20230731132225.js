import axios, { Axios } from "axios";
import { useState } from "react"
import React from 'react'

const HandleUpload = () => {
  const [uploadImg, setUploadImg] = useState(null);
    const uploadFile = () => {
      if (!uploadImg) {
        console.error('No image file selected');
        return;
      }
  
      const formData = new FormData();
      formData.append('uploadimg', uploadImg);
  
      fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
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
          setUploadImg(e.target.files[0]);
        }}
      />
      <button onClick={uploadFile}>Upload</button>
    </div>
  )
}

export default HandleUpload