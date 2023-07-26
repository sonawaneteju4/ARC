import React, { useState } from 'react'

const ServiceCarsoul = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const goToPreviousSlide = () => {
        setActiveSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1);
      };
    
      const goToNextSlide = () => {
        setActiveSlide(activeSlide === slides.length - 1 ? 0 : activeSlide + 1);
      };
  return (
    <div>ServiceCarsoul</div>
  )
}

export default ServiceCarsoul