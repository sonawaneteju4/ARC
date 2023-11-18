import React from 'react'
import { useState } from 'react'

const HandleError = ({ message, onClose }) => {
    const [showAlert, setShowAlert] = useState(true);
  return (
    <div className='relative'>
        <center>
        Handle Error
        </center>
    </div>
  )
}

export default HandleError