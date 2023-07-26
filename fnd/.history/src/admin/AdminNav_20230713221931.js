import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div className='w-screen h-16 mt-0 bg-black text-white flex fixed'>
       

        <div className='pl-5 my-5'>
           <Link to="/adminHome"
            Orders
            </div>
        <div className='pl-5 my-5'>
           <Link to="/adminHome"
            Products
            </div>
        <div className='pl-5 my-5'>
           <Link to="/adminHome"
            Services
            </div>
        <div className='pl-5 my-5'>
           <Link to="/adminHome"
            Gallary
            </div>
        <div className='pl-5 my-5'>
           <Link to="/adminHome"
            Quotations
            </div>
        <div className='pl-5 my-5'>
           <Link to="/adminHome"
            Contact Us
            </div>
       <div className='pl-5 my-5'>
        <Link to='/'>Home</Link>
        </div> 
        
        
    </div>
  )
}

export default AdminNav