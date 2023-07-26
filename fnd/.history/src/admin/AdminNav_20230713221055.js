import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div className='w-screen h-16 mt-0 bg-gray-700 text-white flex fixed'>
       

        <div className='pl-5 my-5'>Orders</div>
        <div className='pl-5 my-5'>Products</div>
        <div className='pl-5 my-5'>Services</div>
        <div className='pl-5 my-5'>Gallary</div>
        <div className='pl-5 my-5'>Quotations</div>
        <div className='pl-5 my-5'>Contact Us</div>
       <div c>
        <Link to='/'>Home</Link>
        </div> 
        
        
    </div>
  )
}

export default AdminNav