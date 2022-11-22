import React from 'react';
import './Hero.css';
import bgImage from '@assets/img/bg-texture.jpg';
import miniature from '@assets/img/hero.jpg';
import playButton from '@assets/svg/play-button.svg';
import roundLogo from '@assets/logo/rounded-logo.png';

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero-container" style={{backgroundImage: `url(${bgImage})`}}>
        <div className="hero">
        <div className="title-container">
          <h1 className="h1-main title"> 
            ¡Arma tu rutina ideal de 
            <span className="textdecoration">skincare</span> 
            de una vez por todas!
          </h1>
          <p className="p-m description">Es momento de que la piel de tu rostro reciba el cuidado que tanto merece, conoce el paso a paso junto a Selfthetik</p>
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
        </div>
      </section>
    </React.Fragment>
  )
}

export default Hero