import React from 'react'
import CarsoulReview from './CarsoulReview';
const GoogleReviews = () => {
  return (
    <div>
         <div className="mt-5">
          <p className="font-bold text-3xl lg:text-4xl text-center mb-5" style={{color: "dodgerblue"}}>
            Google Revies
          </p>
          <div>
            <CarsoulReview/>
          </div>
          <div className='flex justify-center mt-5'><a href='' className='px-7 mt-5 py-3 mr-2 bg-black text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out'>View More</a></div>
        </div>
    </div>
  )
}

export default GoogleReviews