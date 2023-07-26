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
    <div>
         <div className="carousel">
      <div className="slide-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${activeSlide === index ? 'active' : ''}`}
          >
            <img src={slide.image} alt={slide.caption} />
            <p>{slide.caption}</p>
          </div>
        ))}
      </div>
      <div className="controls">
        <button onClick={goToPreviousSlide}>Previous</button>
        <button onClick={goToNextSlide}>Next</button>
      </div>
    </div>
    </div>
  )
}

export default ServiceCarsoul