import React from 'react'
import { BsList } from 'react-icons/bs';
import { BsList } from 'react-icons/bs';

const Index = () => {
  return (
    <div>
        <div className=' w-screen h-16 flex justify-between'>
            <div className=' flex items-center'>
                {/* side bar spreader and Brand Name */}
                <div className='text-4xl pl-7'>
                <BsList />
                </div>
                <p className='text-2xl pl-7'>
                AR CUSTOMS 
                </p>
            </div>
            <div className=' flex items-center'>
                {/* side bar spreader and Brand Name */}
                <div className='text-4xl '>
                <FiLogOut />
                </div>
                <p className='text-2xl pr-20'>
                AR CUSTOMS 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Index