import React from 'react'
import { BsList } from 'react-icons/bs';

const Index = () => {
  return (
    <div>
        <div className=' w-screen h-16 flex justify-between'>
            <div className=' flex items-center'>
                {/* side bar spreader and Brand Name */}
                <div className='text-4xl '>
                <BsList />
                </div>
                <p className='text-2xl pl-7'>
                AR CUSTOMS 
                </p>
            </div>
            <div className=' flex items-center'>
                {/* side bar spreader and Brand Name */}
                <div className='text-4xl '>
                <BsList />
                </div>
                <p className='text-2xl '>
                AR CUSTOMS 
                </p>
            </div>
        </div>
    </div>
  )
}

export default Index