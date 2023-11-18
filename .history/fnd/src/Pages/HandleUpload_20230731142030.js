import axios from 'axios';
import { useState } from 'react';

const HandleUpload = () => {
  const [img, setImg] = useState('');
  const [uploadImg, setUploadImg] = useState('');

  const uploadFile = () => {
    console.log(fi);

    const formData = new FormData();
    formData.append('uploadimg', uploadImg);

    axios
      .post('http://localhost:3001/upload', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error('Error response from server:', error.response);
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
  );
};

export default HandleUpload;
