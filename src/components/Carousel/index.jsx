import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselConfig = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  swipeToSlide: true,
  centerMode: true,
  className: 'center',
  pauseOnHover: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: true,
      }
    }
  ]
};

const Carousel = ({width = '100%', height = '100%', children}) => {
  
  return (
    <Slider {...CarouselConfig}>
      {children}
    </Slider>
  )
}

export default Carousel;