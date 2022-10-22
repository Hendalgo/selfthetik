import React, { Children, useState } from 'react';
import './Carousel.css';

const Carousel = ({children: propsChildren, width = "100%", height = "100%", visibleItems = 3}) => {
  const children = Children.toArray(propsChildren);
  const totalItems = children.length;
  return (
    <React.Fragment>
      <div className="carousel-container" {...{width, height}}>|
      </div>
    </React.Fragment>
  )
}

export default Carousel;