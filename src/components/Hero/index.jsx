import React from 'react';
import './Hero.css';
import bgImage from '@assets/img/bg-texture.jpg';
import miniature from '@assets/img/hero.jpg';
import playButton from '@assets/svg/play-button.svg';
import roundLogo from '@assets/logo/rounded-logo.png';

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero" style={{backgroundImage: `url(${bgImage})`}}>
        <div className="title-container">
          <h1 className="h1-b title"> Lorem ipsum dolor sit <span className="textdecoration">amet</span> consectetur adipiscing</h1>
          <p className="p-m description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptate fugit itaque hic harum, eligendi </p>
        </div>
        <div className="video-container">
          <img src={miniature} alt="Miniature to intro video" className="miniature" />
          <button className="play-button">
            <img src={playButton} alt="Play Button" />
          </button>
          <div className="vc-after">
            <img src={roundLogo} alt="Rounded Logo" />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Hero