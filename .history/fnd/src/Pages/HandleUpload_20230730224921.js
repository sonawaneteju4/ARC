import { useState } from "react"
import React from 'react'

const HandleUpload = () => {
    const [img, setimg] = useState("");
    const uploadFile = (file) => {
        console.log(file[0])
        setimg(file[0].name)
    }
  return (
    <div className='top-28 mt-28'>
        <i
        <input type="file" onChange={(e)=>{
            uploadFile(e.target.files)
        }} />
        
    </div>
  )
}

export default HandleUpload