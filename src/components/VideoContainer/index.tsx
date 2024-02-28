import React from 'react';
import videoIcon from '@assets/svg/video-icon.svg';
import './VideoContainer.css';

interface IVideoContainerProps {
  title:string;
  img:string;
  description:string;
}

const VideoContainer = ({title, img, description}: IVideoContainerProps):React.JSX.Element => {
  return (
    <React.Fragment>
      <div className="v-container">
        <img src={img} alt="Miniature video" className="miniature-video" />
        <div className="title-video">
          <h3 className="h3-m">{title}</h3>
          <img src={videoIcon} alt="icon video" />
        </div>
        <p className="description-video p-m">
          {description}
        </p>
      </div>
    </React.Fragment>
  )
}

export default VideoContainer