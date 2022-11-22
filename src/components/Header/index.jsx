import React from 'react';
import { createPortal } from 'react-dom';
import logoSelfhetik from '@assets/logo/logo-selfthetik.svg';
import menu from '@assets/svg/menu.svg';
import './Header.css';
import patreonLogo from '@assets/svg/patreon.svg';

const Header = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [patreonVisible, setPatreonVisible] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(()=>{
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
        <button className="button-menu" onClick={()=>setToggle(!toggle)}>
        <iframe src="https://embed.lottiefiles.com/animation/9789"></iframe>
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
                <a href="/#resultados">Resultados</a>
              </li>
              <li className="menu-item patreon">
                <a href="https://patreon.com/selfthetik" target="_blank">
                  <img src={patreonLogo} alt="" srcset="" /> 
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
    document.getElementById('header')
  );
}

export default Header