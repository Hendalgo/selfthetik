import React from 'react';
import { createPortal } from 'react-dom';
import logoSelfhetik from '@assets/logo/logo-selfthetik.svg';
import menu from '@assets/svg/menu.svg';
import './Header.css';

const Header = () => {
  return createPortal(
    <React.Fragment>
      <div className="header-m">
        <img src={logoSelfhetik} alt="Logo selfthetik" className="logo-selfthetik" />
      </div>
      <div className="header-l">
        <button className="button-menu">
          <img src={menu} alt="" className='menu-img' />
        </button>
      </div>
    </React.Fragment>,
    document.getElementById('header')
  );
}

export default Header