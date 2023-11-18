import { useState } from 'react';

const HandleUpload = () => {
  const [img, setImg] = useState('');
  const [uploadImg, setUploadImg] = useState('');

  const uploadFile = () => {
    console.log(uploadImg); // Check if the selected image is logged correctly

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
          setUploadImg(e.target.files[0].name); // Update the uploadImg state correctly
        }}
      />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default HandleUpload;
