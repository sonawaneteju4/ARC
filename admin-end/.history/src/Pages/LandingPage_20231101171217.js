import React from 'react'

const LandingPage = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 1000);

  return (
    <div>{loading && loading}  Hey Landing On AR Customs Admin Page + css Working tailwindcss</div>
  )
}

export default LandingPage