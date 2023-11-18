import axios, { Axios } from "axios";
import { useState } from "react"
import React from 'react'

const HandleUpload = () => {
    const [img, setimg] = useState("");
    const uploadFile = (file) => {
        console.log(file[0])
        const formData = new FormData();
        formData.append("file", file[0])
        formData.append("upload_present", "xa6ozlcs")
        axios.post("https://api.cloudinary.com/v1_1/dcatujmtp/image/upload", formData).then((Response))
    }
    
  return (
    <div className='top-28 mt-28'>
        <input type="file" onChange={(e)=>{
            uploadFile(e.target.files)
        }} />
        
    </div>
  )
}

export default HandleUpload