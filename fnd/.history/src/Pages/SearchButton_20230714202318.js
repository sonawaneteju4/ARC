import React from 'react'
import '../Pages/Search.css'

const   SearchButton = ({onChange}) => {
  return (

        <form className='mr-3'>
          <div className="relative text-gray-600 ">
          
            <input type="search" name="q" className="py-1 lg:py-2 text-xs lg:text-sm  text-black border-2 rounded-xl pl-10 " placeholder="Search..." onChange={onChange}  autoComplete="off" />
          </div>
        </form>

  )
}

export default SearchButton