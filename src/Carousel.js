import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";


import "./Carousel.css";

 const slides=[
  {
      "src":"https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/298386367/original/b192698ced8a33b59f7465b75fdffb6c3c6872e3/design-creative-restaurant-or-food-banner.jpg",
      "alt":"image 1"
  },
  {
      "src":"https://graphicsfamily.com/wp-content/uploads/edd/2021/09/Pizza-Restaurant-Social-Media-Banner-1536x864.jpg",
      "alt":"image 2"
  },
  {
      "src":"https://i.pinimg.com/736x/e3/99/ce/e399ce56924d8b840d9075b514626199.jpg",
      "alt":"image 3"
  }, 
  {
      "src":"https://img.freepik.com/premium-psd/orange-juice-drink-menu-facebook-cover-banner-template-restaurant-promotion_123605-1211.jpg",
      "alt":"image 4"
      
  }
]

const Carousel = () => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? slides.length - 1 : slide - 1);
  };

  return (
    <div className="container d-flex flex-row justify-content-center">
    <div className="row">

    <div className="carousel col-12  col-md-12 col-sm-12" style={{width:"86vw"}}>
      <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
      {slides.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {slides.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
    
    
    
    </div>
    
    </div>
    
  );
};

export default Carousel
