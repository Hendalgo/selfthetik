import React from 'react';
import './Hero.css';
import bgImage from '@assets/img/bg-texture.webp';
import roundLogo from '@assets/logo/rounded-logo.png';

const Hero = () => {
  return (
    <React.Fragment>
      <section className="hero-container" style={{backgroundImage: `url(${bgImage})`}}>
        <div className="hero">
        <div className="title-container">
          <h1 className="h1-main title"> 
            ¡Arma tu rutina ideal de 
            <span className="textdecoration">skin<span className='m-i'>care</span></span> 
            de una vez por todas!
          </h1>
          <p className="p-m description">Es momento de que la piel de tu rostro reciba el cuidado que tanto merece, conoce el paso a paso junto a Selfthetik</p>
        </div>
        <div className="video-container">
          <iframe className='miniature' loading='lazy' width="560" height="315" src="https://www.youtube.com/embed/bnkjvpBigVY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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