import React from 'react'
import { BsList } from 'react-icons/bs';

const Index = () => {
  return (
    <div>
        <div className='w-screen h-16 flex justify-between'>
            <div className=' flex items-center'>
                {/* side bar spreader and Brand Name */}
                <div className='text-4xl mt-3 ml-7'>
                <BsList />
                </div>
                <div className='text-2xl mt-3 ml-7'>
                AR CUSTOMS 
                </div>
            </div>
            <div></div>
        
        </div>
    </div>
  )
}

export default Index