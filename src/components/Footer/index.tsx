import React from 'react';
import { createPortal } from 'react-dom';
import "./Footer.css";

const Footer = ():React.ReactPortal => {
  return createPortal(
    <React.Fragment>
      <div className="footer">
        <div className="footer-l">
          <h5 className='p-m'>
          © Selfthetik 2022
          </h5>
        </div>
        <div className="footer-m">
          <a className='p-m footer-text' href="/privacy-policy">Política de Privacidad</a>
        </div>
        <div className="footer-r">
          <a className='p-m footer-text' href="/terms-conditions">Términos y Condiciones</a>
        </div>
      </div>
    </React.Fragment>
    , document.getElementById("footer")!);
}

export default Footer