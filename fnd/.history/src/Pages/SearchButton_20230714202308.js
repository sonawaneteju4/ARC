import React from 'react'
import '../Pages/Search.css'

const   SearchButton = ({onChange}) => {
  return (

        <form className='mr-3'>
          <div className="relative text-gray-600 ">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button type="submit" className="p-1 focus:outline-none ">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
            </span>
            <input type="search" name="q" className="py-1 lg:py-2 text-xs lg:text-sm  text-black border-2 rounded-xl pl-10 " placeholder="Search..." onChange={onChange}  autoComplete="off" />
          </div>
        </form>

  )
}

export default SearchButton