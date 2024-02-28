import React, { Ref, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import logoSelfhetik from '@assets/logo/logo-selfthetik.svg';
import menu from '@assets/svg/menuHamburger.json';
import './Header.css';
import patreonLogo from '@assets/svg/patreon.svg';
import { Player, PlayerEvent } from '@lottiefiles/react-lottie-player';

const Header = ():React.ReactPortal => {
  const [width] = useState<number>(window.innerWidth);
  const [patreonVisible, setPatreonVisible] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [frame, setFrame] = useState<number>(0);
  const lottie:Ref<Player> = useRef<Player>(null);
  const menuChange = ()=>{
    lottie?.current?.setPlayerSpeed(6);
    lottie?.current?.play();
    setToggle(!toggle);
  }
  const animation = (e:PlayerEvent)=>{
    if (e === "frame") {
      setFrame(frame+1);
      if (frame === 15) {
        lottie?.current?.pause();
      }
      if (frame === 29) {
        setFrame(0);
      }
    }
  }
  useEffect(()=>{
    if (width > 768) {
      setPatreonVisible(true);
    }
  },[]);
  return createPortal(
    <React.Fragment>
      <div className="header">
      {
        patreonVisible
        ?<div className="header-r">
          <div className="patreon-button">
            <a className='p-m' href="http://www.patreon.com/selfthetik" target="_blank" rel="noopener noreferrer"> 
              <img src={patreonLogo} alt="Patreon icon" />
              Patreon
            </a>
          </div> 
        </div>
        :""
      }
      <div className="header-m">
        <a href="/">
        <img src={logoSelfhetik} alt="Logo selfthetik" className="logo-selfthetik" />
        </a>
      </div>
      <div className="header-l">
        <button className="button-menu" onClick={menuChange}>
          <Player 
            src={menu}
            ref={lottie}
            onEvent={animation}
            style={{width: 50, height:50}}
          />
        </button>
        {
          toggle
          ?<div className="toggle">
            <ul className='menu'>
              <li className="menu-item">
                <a href="/#contenido-exclusivo">Contenido Exclusivo</a>
              </li>
              <li className="menu-item"> 
                <a href="/#beneficios">Beneficios</a>
              </li>
              <li className="menu-item"> 
                <a href="/#testimonios">Testimonios</a>
              </li>
              <li className="menu-item"> 
                <a href="/#resultados">Resultados</a>
              </li>
              <li className="menu-item patreon">
                <a href="https://patreon.com/selfthetik" target="_blank">
                  <img src={patreonLogo} alt="" /> 
                  Patreon
                </a>
              </li>
            </ul>
          </div>
          :""
        }
      </div>
      </div>
    </React.Fragment>,
    document.getElementById('header')!
  );
}

export default Header