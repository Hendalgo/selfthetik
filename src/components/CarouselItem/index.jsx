import React from "react";
import ReactStar from "react-stars";
import "./CarouselItem.css";
const CarouselItem = ({ img, title, description, profilePicture }) => {
  return (
    <>
      <img src={img} alt={title} className="video" />
      <div
        className="carousel-item-content"
      >
        <div
          className="carousel-item-content-img"
        >
          <img src={profilePicture} alt={title} />
        </div>
        <div
          className="carousel-item-content-text"
        >  
          <h3>{title}</h3>
          <ReactStar
            count = {5}
            value={5}
            size={24}
            edit={false}
          />
        </div>
        <div></div>
      </div>
    </>
  );
}

export default CarouselItem;