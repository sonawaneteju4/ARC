import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div className='w-screen h-16 mt-0 bg-black text-white flex fixed'>
       

        <div className='pl-5 my-5'>
           <Link
            Orders
            </div>
        <div className='pl-5 my-5'>
           <Link
            Products
            </div>
        <div className='pl-5 my-5'>
           <Link
            Services
            </div>
        <div className='pl-5 my-5'>
           <Link
            Gallary
            </div>
        <div className='pl-5 my-5'>
           <Link
            Quotations
            </div>
        <div className='pl-5 my-5'>
           <Link
            Contact Us
            </div>
       <div className='pl-5 my-5'>
        <Link to='/'>Home</Link>
        </div> 
        
        
    </div>
  )
}

export default AdminNav