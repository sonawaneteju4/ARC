import React from 'react'

const HandleUpload = () => {
    const [first, setfirst] = useState(second)
    const uploadFile = (file) => {
        console.log(file[0])
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