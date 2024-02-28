import React from 'react';
import Slider, { Settings } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


interface CarouselProps {
  children: React.ReactNode;
}

const CarouselConfig:Settings = {
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

const Carousel = ({children}:CarouselProps) => {
  
  return (
    <Slider {...CarouselConfig}>
      {children}
    </Slider>
  )
}

export default Carousel;