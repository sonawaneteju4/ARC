import React from 'react'

const LandingPage = () => {
  const [loading, setloading] = useState(true);

  setTimeout(() => {
    setloading(false);
  }, 1000);

  return (
    <div>{}Hey Landing On AR Customs Admin Page + css Working tailwindcss</div>
  )
}

export default LandingPage