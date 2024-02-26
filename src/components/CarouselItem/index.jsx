import React from "react";
import "./CarouselItem.css";
const CarouselItem = ({ img, title, description }) => {
  return (
    <>
      <img src={img} alt={title} />
      <div
        className="carousel-item-content"
      >
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
}

export default CarouselItem;