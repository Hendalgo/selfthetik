import React, { useEffect, useRef, useState } from 'react';
import './Carousel.css';

const Carousel = ({ width = "100%", height = "100%", visibleItems = 5, timer = 4500, children }) => {
  const [current, setCurrent] = useState(Math.floor(visibleItems / 2));
  const ref = useRef([]);

  let items = [...children];
  
  for (let i = 0; i < Math.floor(visibleItems / 2); i++) {
    items.unshift(children[children.length - 1 - i]);
    items.push(children[i]);
  }

  while (items.length < visibleItems - Math.floor(visibleItems / 2)) {
    items = [...items, ...children];
  }

  useEffect(() => {
    const interval = setInterval(() => {
      ref.current.map((item, index) => {
        if (index === current) {
        }
      });
    }, timer);


    return () => clearInterval(interval);
  }, [current, timer]);
  
  return (
    <div className="carousel-container" style={{ width, height }}>
      <div className="carousel">
        {
          items.map((item, index) =>{
              return(
                <div key={index} className={`carousel-item ${index === current ? 'active' : ''}`}
                  ref={el => ref.current[index] = el}
                >
                  {item}
                </div>
              )
            }
          )
        }
      </div>
    </div>
  )
}

export default Carousel;