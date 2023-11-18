import React from 'react'
import { BsList } from 'react-icons/bs';

const Index = () => {
  return (
    <div>
        <div className='max-w-screen-lg  h-16 flex justify-between'>
            <div className=' flex items-center'>
                {/* side bar spreader and Brand Name */}
                <div className='text-4xl pl-7'>
                <BsList />
                </div>
                <div className='text-2xl pl-7'>
                AR CUSTOMS 
                </div>
            </div>
            <div className=' flex items-center'>
                {/* side bar spreader and Brand Name */}
                <div className='text-4xl pr-20'>
                <BsList />
                </div>
                <div className='text-2xl pr-20'>
                AR CUSTOMS 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index