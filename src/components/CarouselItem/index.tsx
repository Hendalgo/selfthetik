import ReactStar from "react-stars";
import "./CarouselItem.css";

interface CarouselItemProps {
  img: string;
  title: string;
  profilePicture: string;
}

const CarouselItem = ({ img, title, profilePicture }:CarouselItemProps): React.JSX.Element => {
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