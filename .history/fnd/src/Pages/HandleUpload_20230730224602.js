import React from 'react'

const HandleUpload = () => {
    const uploadFile = (file) => {
        console.log(file)
    }
  return (
    <div className='top-28 mt-28'>
        <input type="file" onChange={(e)=>{
            uploadFile(e.target.f)
        }} />
        
    </div>
  )
}

export default HandleUpload