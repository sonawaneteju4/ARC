import React from 'react'

const SideBar = () => {
  return (
    <div className='pt-5  flex'>

        {/* Current Open Bills */}
        <div className='h-64 w-64 bg-slate-300 m-1'>
          Bill No:123456798 <br />
          Name : Tejas Sonawane <br />
          Vechical : Maruti Swift VXI 2022 <br />
          <hr />
          C
        </div>
        <div className='h-64 w-64 bg-slate-300 m-1'>
          Bill No:123456798
          Name : Tejas Sonawane
        </div>
    </div>
  )
}

export default SideBar