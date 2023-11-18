import axios, { Axios } from "axios";
import { useState } from "react"
import React from 'react'

const HandleUpload = () => {
    const [img, setimg] = useState("");
    const [uploadimg, setuploadimg] = useState("");
    const uploadFile = () => {
        console.log(uploadimg);
        const formData = new FormData();
        formData.append("file", uploadimg);
        formData.append("upload_present", "xa6ozlcs");
      
        axios
          .post("https://cors-anywhere.herokuapp.com/http://res.cloudinary.com/dcatujmtp/image/upload", formData, {
            headers: formData.getHeaders(),
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });
    }
    
  return (
    <div className='top-28 mt-28'>
        <input type="file" onChange={(e)=>{
            setuploadimg(e.target.files[0])
        }} />
        <button onClick={uploadFile }>
            upload
        </button>
        
    </div>
  )
}

export default HandleUpload