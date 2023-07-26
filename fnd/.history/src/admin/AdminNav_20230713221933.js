import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div className='w-screen h-16 mt-0 bg-black text-white flex fixed'>
       

        <div className='pl-5 my-5'>
           <Link to="/adminHome">
            
           </Link>
            Orders
            </div>
        <div className='pl-5 my-5'>
           <Link to="/adminHome">
            
           </Link>
            Products
            </div>
        <div className='pl-5 my-5'>
           <Link to="/adminHome">
            
           </Link>
            Services
            </div>
        <div className='pl-5 my-5'>
           <Link to="/adminHome">
            
           </Link>
            Gallary
            </div>
        <div className='pl-5 my-5'>
           <Link to="/adminHome">
            
           </Link>
            Quotations
            </div>
        <div className='pl-5 my-5'>
           <Link to="/adminHome">
            
           </Link>
            Contact Us
            </div>
       <div className='pl-5 my-5'>
        <Link to='/'>Home</Link>
        </div> 
        
        
    </div>
  )
}

export default AdminNav