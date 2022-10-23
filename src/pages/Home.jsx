import React from 'react';
import Header from '@components/Header';
import Hero from '@components/Hero';
import './Home.css';
import VideoContainer from '@components/VideoContainer';
import test from '@assets/img/videos-miniature.jpg';
import bgBenefits from '@assets/img/bg-benefits.jpg';
import Benefits from '@components/Benefits';
import Carousel from '@components/Carousel';

const Home = () => {
  const videos = [
    {
      img: test,
      title: 'Videos exclusivos',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida adipiscing vel purus libero, urna, morbi commodo donec nibh.'
    },
    {
      img: test,
      title: 'Videos exclusivos',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida adipiscing vel purus libero, urna, morbi commodo donec nibh.'
    },
    {
      img: test,
      title: 'Videos exclusivos',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida adipiscing vel purus libero, urna, morbi commodo donec nibh.'
    },
  ]
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <section className="about">
        <div className="about-container">
          <div className="about-title ">
            <h2 className="h2-b">¿Qué encontraras en el contenido exclusivo?</h2>
          </div>
          <div className="exclusive-videos">
            {
              videos.map((item, index)=>
                <VideoContainer key={index} title={item.title} img={item.img} description={item.description} />
              )
            }
          </div>
        </div>
      </section>
      <section className="benefits" style={{backgroundImage: `url(${bgBenefits})`}}>
        <h2 id="benefits-title" className='h1-b'>Beneficios</h2>
        <div className="benefits-container">
          <Benefits />
          <Benefits />
          <Benefits />
        </div>
      </section>
      <section className="testimonials">
        <Carousel visibleItems={5}>
          <div className="">
            <img src={test} alt="" />
          </div>
          <div className="">
            <img src={test} alt="" />
          </div>
          <div className="">
            <img src={test} alt="" />
          </div>
        </Carousel>
      </section>
      <section className="bottom-banner">
        <div className="banner">
          <button className="banner-button">Inscribirme</button>
        </div>
      </section>
    </React.Fragment>
  )
}

export default Home;