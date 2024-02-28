import React from 'react';
import Header from '@components/Header';
import Hero from '@components/Hero';
import './Home.css';
import VideoContainer from '@components/VideoContainer';
import miniatura1 from '@assets/img/miniatura1.webp';
import miniatura2 from '@assets/img/miniatura2.webp';
import miniatura3 from '@assets/img/miniatura3.webp';
import bgBenefits from '@assets/img/bg-benefits.webp';
import bgSubscribe from '@assets/img/bg-subscribe.webp';
import results01 from '@assets/img/results01.webp';
import results02 from '@assets/img/results02.webp';
import results03 from '@assets/img/results03.webp';
import results04 from '@assets/img/results04.webp';
import Benefits from '@components/Benefits';
import Footer from '@components/Footer';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const Home = () => {
  const videos = [
    {
      img: miniatura1,
      title: 'Arma tu primera rutina de skincare',
      description:'Fácil, rápido y eficaz. Esta será la rutina ideal para ti si estás iniciando en el mundo del Skincare'
    },
    {
      img: miniatura2,
      title: 'Dile adiós a la incomodidad de la piel seca con esta rutina',
      description:'¿Tienes la piel seca? descubre cómo darle más brillo y elasticidad con tan solo cuatro pasos.'
    },
    {
      img: miniatura3,
      title: 'Hagamos que el exceso de grasa ya no sea un problema',
      description:'Es momento de aprender como controlar esa grasita extra de nuestra piel. Conoce esta increíble rutina.'
    },
  ];
  const benefits = [
    {
      title: '¡Conoce tu piel y su cuidado!',
      description: 'Te ayudaremos a conocer el tipo de piel que posees y aprenderás a cómo armar la rutina ideal para ti.'
    },
    {
      title: '¡Adquiere un brillo increíble!',
      description: 'Tu piel se verá mucho más sana y brillante, lucirá más hidratada y eliminarás impurezas.'
    },
    {
      title: '¡Tu maquillaje lucirá mil veces mejor!',
      description: 'El secreto para un maquillaje perfecto es el cuidado que le das a tu piel antes de utilizarlo, hará que resalte y dure más tiempo.'
    }
  ];
  const [width, setWidth] = React.useState(window.innerWidth);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(()=>{
    if (width < 768) {
      setVisible(true);
    }
  },[]);
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <section id='contenido-exclusivo' className="about">
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
      <section id='beneficios' className="benefits" style={{backgroundImage: `url(${bgBenefits})`}}>
        <div className="benefits-container">
          <h2 id="benefits-title" className='h1-b'>Beneficios</h2>
          <div className="benefits-items">
            {
              benefits.map((item, index)=>
                <Benefits title={item.title} description={item.description} key={index} />
              )
            }
          </div>
        </div>
      </section>
      <section id='testimonios' className="testimonials">
        <div className="testimonials-container">
          <div className="testimonials-title">
            <h2 className='h1-b bold'>Lo que nuestros clientes opinan de nosotros</h2>
          </div>
          <div className="testimonials-items">
            <Carousel>
              <CarouselItem
                img="https://picsum.photos/1080/1920?random=1"
                title="Titulo 1"
                description="Descripcion"
                profilePicture="https://picsum.photos/50/50?random=1"
              />
              <CarouselItem
                img="https://picsum.photos/1080/1920?random=2"
                title="Titulo 2"
                description="Descripcion"
                profilePicture="https://picsum.photos/50/50?random=2"
              />
              <CarouselItem
                img="https://picsum.photos/1080/1920?random=3"
                title="Titulo 3"
                description="Descripcion"
                profilePicture="https://picsum.photos/50/50?random=3"
              />
              <CarouselItem
                img="https://picsum.photos/1080/1920?random=4"
                title="Titulo 4"
                description="Descripcion"
                profilePicture="https://picsum.photos/50/50?random=4"
              />
              <CarouselItem
                img="https://picsum.photos/1080/1920?random=5"
                title="Titulo 5"
                description="Descripcion"
                profilePicture="https://picsum.photos/50/50"
              />
            </Carousel>
          </div>
        </div>
      </section>
      <section id='resultados' className="results">
        <div className="results-container">
          <div className='results-title'>
            <h2 className='h1-b bold'>Resultados </h2>
          </div>
          <div className="results-img">
              <div className="r-img-1">
                <img src={results01} alt="" />
              </div>
              <div className="r-img-3">
                <div className="r-img-2">
                  <img src={results02} alt="" />
                  <img src={results03} alt="" />
                </div>
                <div className="r-img-4">
                  <img src={results04} alt="" />
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <div className="subscribe-container" >
          <div className="subscribe-bg" style={{backgroundImage: `url(${bgSubscribe})`}}>
            <div className="subs-title">
              <h2 className='h1-b bold' style={{letterSpacing: 1}}>
                Inscríbete con un 50% <br /> de descuento
              </h2>
            </div>
            <div className="subs-button">
              <a className='p-m' href="http://www.patreon.com/selfthetik" target="_blank" rel="noopener noreferrer">Inscribirme</a>
            </div>  
          </div>
        </div>
      </section>
      {
        visible
        ?<a href='https://patreon.com/selfthetik' target="_blank">
          <section className="bottom-banner">
            <div className="banner">
              <button className="banner-button p-m">Inscribirme</button>
            </div>
          </section>
        </a>
        :""
      }
      <Footer />
    </React.Fragment>
  )
}

export default Home;