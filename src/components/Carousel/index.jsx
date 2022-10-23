import React, { Children, useState } from 'react';
import './Carousel.css';

const Carousel = ({children: propsChildren, width = "100%", height = "100%", visibleItems = 3}) => {
  const [current, setCurrent] = useState(0);
  const  img = [
    "https://picsum.photos/id/100/200/300",
    "https://picsum.photos/id/120/200/300",
    "https://picsum.photos/id/10/200/300"
  ]
  const [prev, setPrev] = useState(img.length-1);
  const [next, setNext] = useState(1);
  const children = Children.toArray(propsChildren);
  const totalItems = children.length;
  return (
    <React.Fragment>
      <div className="carousel-container" {...{width, height}}>
        {
          img.map((item, index)=>{
            if (index === current) {
              return(
                <>
                  <div className="carousel-item">
                    <img src={img[prev]} alt="" />
                  </div>
                  <div key={index} className="carousel-item">
                    <img src={item} alt="" />
                  </div>
                  <div className="carousel-item">
                    <img src={img[next]} alt="" />
                  </div>
                </>
              );
            }
          })
        }
      </div>
    </React.Fragment>
  )
}

export default Carousel;