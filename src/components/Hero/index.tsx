import React from 'react';
import './Hero.css';
import bgImage from '@assets/img/bg-texture.webp';
import roundLogo from '@assets/logo/rounded-logo.png';
import { Trans, useTranslation } from 'react-i18next';

const Hero = ():React.JSX.Element => {
  const {t} = useTranslation("ns1");
  return (
    <React.Fragment>
      <section className="hero-container" style={{backgroundImage: `url(${bgImage})`}}>
        <div className="hero">
          <div className="title-container">
            <h1 className="h1-main title"> 
              <Trans ns='ns1'  i18nKey={"hero.title"} components={{span: <span/>}} />
            </h1>
            <p className="p-m description">
              {t("hero.description")}
            </p>
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