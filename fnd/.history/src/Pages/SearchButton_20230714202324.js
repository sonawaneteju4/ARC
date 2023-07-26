import React from 'react'
import '../Pages/Search.css'

const   SearchButton = ({onChange}) => {
  return (

    <div class="flex items-center justify-center ">
    <div class="flex border-2 border-gray-200 rounded">
    <input type="search" name="q" className="py-1 lg:py-2 text-xs lg:text-sm  text-black border-2 border-gray-700 pl-5 " placeholder="Search..." onChange={onChange}  autoComplete="off" />
        {/* <button class="px-4 text-white bg-gray-600 border-l ">
            Search
        </button> */}
    </div>
</div>

  )
}

export default SearchButton