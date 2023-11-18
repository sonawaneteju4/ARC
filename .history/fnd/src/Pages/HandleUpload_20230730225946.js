import axios, { Axios } from "axios";
import { useState } from "react"
import React from 'react'

const HandleUpload = () => {
    const [img, setimg] = useState("");
    const [uploadimg, setuploadimg] = useState("");
    const uploadFile = () => {
        console.log(uploadimg)
        const formData = new FormData();
        formData.append("file", file[0])
        formData.append("upload_present", "xa6ozlcs")
        axios.post("https://api.cloudinary.com/v1_1/dcatujmtp/image/upload", formData).then((response)=>{
            console.log(response)
        })
    }
    
  return (
    <div className='top-28 mt-28'>
        <input type="file" onChange={(e)=>{
            setuploadimg(e.target.files[0])
        }} />
        <button onClick={uploadFile()}>
            upload
        </button>
        
    </div>
  )
}

export default HandleUpload