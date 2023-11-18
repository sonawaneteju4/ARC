import React, { useState } from 'react'
import Spinner from '../Components/Spinner/Spinner'

const LandingPage = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 1000);

  return (
    <div>{loading && <Spinner/>}  Hey Landing On AR Customs Admin Page + css Working tailwindcss</div>
  )
}

export default LandingPage