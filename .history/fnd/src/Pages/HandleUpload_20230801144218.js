import { useState } from 'react';

const HandleUpload = () => {
  const [img, setImg] = useState('');
  const [uploadImg, setUploadImg] = useState('');
  const [bgColor, setbgColor] = useState("");

  const uploadFile = () => {
    sessionStorage.setItem("img", uploadImg);

      // console.log(uploadImg); // Check if the selected image is logged correctly
      // if (!uploadImg) {
      //   console.error('No image file selected');
      //   return;
      // }

      const formData = new FormData();
      formData.append('uploadimg', uploadImg, uploadImg.name); // Make sure to set the 'name' property correctly
      // fetch('http://localhost:5000/api/upload', {
      //   method: 'POST',
      //   body: formData,
      // })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((error) => {
      //     console.error('Error response from server:', error);
      //   });
  };

  return (
    <div className="top-28 mt-28">
      <input
        type="file"
        onChange={(e) => {
          setUploadImg(e.target.files[0]); // Update the uploadImg state correctly
        }}
      />
      <button onClick={uploadFile}>Upload</button>


      <input type="text"
       onChange={(e) => {
        setbgColor(e.target.value); // Update the uploadImg state correctly
      }}
      />
      <div style={{backgroundColor: `${bgColor}`}}>
      hiiiiiiiiiiiiiiii
      </div>
      <p className=`bg-${bgColor}` alt='ajkj'></p>
      {uploadImg}
    </div>

  );
};

export default HandleUpload;
