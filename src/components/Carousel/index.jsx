import React, { Children, useEffect, useRef, useState } from 'react';
import './Carousel.css';
import logoSelfhetik from '@assets/img/videos-miniature.jpg';

const Carousel = ({ width = "100%", height = "100%", visibleItems = 3, timer = 4500}) => {
  const  img = [
    "https://picsum.photos/1080/1920",
    "https://i.picsum.photos/id/284/1080/1920.jpg?hmac=x7CT5JDVS2id6_E-szJwk9XsV8MmVprj5G13k_dn7qI",
    "https://i.picsum.photos/id/116/1080/1920.jpg?hmac=XnDRx5Vq5QMcJMpebj4SswMGczJGoLkNAWqte3cXml8",
    "https://picsum.photos/1080/1920",
    "https://picsum.photos/1080/1920"
  ]
  const [positions, setPositions] = useState({
    current: 0,
    prev: img.length-1,
    next: 1,
    prevToPrev: img.length-2,
    nextToNext: 2
  });
  const [autoPlay, setAutoPlay] = useState(true);
  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const nextToNextRef = useRef(null);
  const prevToPrevRef = useRef(null);
  const currentRef = useRef(null);
  useEffect(()=>{
    let changeCarousel;
    const play = setInterval(()=>{
      console.log("Interval");
      setAutoPlay(autoPlay =>{
        if(autoPlay){
          currentRef.current.classList.add("slideout-left");
          nextRef.current.classList.add("slidein-left");
          nextToNextRef.current.classList.add("slide-left");
          
        changeCarousel = setTimeout(()=>{
          console.log("Time out");
          setPositions(({current, next, nextToNext, prev, prevToPrev}) =>{
            let posAux = {
              current,
              next,
              prev,
              nextToNext,
              prevToPrev
            };
            console.log(posAux);

            (current === (img.lenght - 1))? posAux.current = 0 :posAux.current = current+1;
            (next === (img.length - 1))? posAux.next = 0 :posAux.next = next+1;
            (posAux.next === (img.length - 1))? posAux.nextToNext = 0 :posAux.nextToNext = posAux.next+1;
            (prev === (img.length - 1))? posAux.prev = 0 :posAux.prev = prev+ 1;
            (posAux.prev === (img.length - 1))? posAux.prevToPrev = 0 :posAux.prevToPrev = prev+1;
            currentRef.current.classList.remove("slideout-left");
            nextRef.current.classList.remove("slidein-left");
            nextToNextRef.current.classList.remove("slide-left");
            return posAux;
          });
        }, 350);
          return true;
        }
        return false;
      });
    } ,timer);
    return ()=> {clearInterval(play); clearTimeout(changeCarousel);}
  }, [])
  return (
    <React.Fragment>
      <div className="carousel-container" {...{width, height}} onClick={()=>setAutoPlay(!autoPlay)}>
        <div className="carousel-item unactive" ref={prevToPrevRef}>
          <img src={img[positions.prevToPrev]} alt="" />
        </div>
        <div className="carousel-item unactive" ref={prevRef}>
          <img src={img[positions.prev]} alt="" />
        </div>
        <div className="carousel-item active" ref={currentRef}>
          <img src={img[positions.current]} alt="" />
        </div>
        <div className="carousel-item unactive" ref={nextRef}>
          <img src={img[positions.next]} alt="" />
        </div>
        <div className="carousel-item unactive" ref={nextToNextRef}>
          <img src={img[positions.nextToNext]} alt="" />
        </div>
      </div>
    </React.Fragment>
  )
}

export default Carousel;