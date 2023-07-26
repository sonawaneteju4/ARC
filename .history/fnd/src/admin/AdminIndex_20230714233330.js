import React from 'react'
import AdminNav from './AdminNav'

const AdminIndex = () => {
  return (
    <div>
 <div
        className="lg:pt-10 pt-20 bg-cover bg-fixed"
        style={{ backgroundImage: `url("/image/mainbgg.jpg")` }}
      >
        <StoreFront />
      </div>


 <div className='h-screen pt-20 text-2xl'>
 <h1 style={{ fontFamily: 'var(--default-font)' }}>default Ar Customs</h1>
 <h1 style={{ fontFamily: 'var(--heading-font)' }}>AR Customs</h1>
      <p style={{ fontFamily: 'var(--content-font)' }}>Whereas disregard and contempt for human rights have resulted</p>
      <div style={{ fontFamily: 'var(--art-font)' }}>Art Content Something</div>
    </div>
    </div>
  )
}

export default AdminIndex