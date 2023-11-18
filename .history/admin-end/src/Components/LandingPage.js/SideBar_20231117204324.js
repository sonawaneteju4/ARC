import React from 'react'

const SideBar = () => {
  return (
    <div className='pt-5  flex'>

        {/* Current Open Bills */}
        <div className=' w-64 bg-slate-300 m-1'>
          Bill No:123456798 <br />
          Name : Tejas Sonawane <br />
          Vechical : Maruti Swift VXI 2022 <br />
          <hr />
          Full Body Wrap <br />
          PPF  <br />
          Tint <br />
          <hr />
          <button className='bg-white px-2 my-2 rounded-xl'>Open Bill</button>
        </div>
        <div className=' w-64 bg-slate-300 m-1'>
          Bill No:123456798
          Name : Tejas Sonawane
        </div>
    </div>
  )
}

export default SideBar