import React from 'react';
import { createPortal } from 'react-dom';
import "./Footer.css";
import { useTranslation } from 'react-i18next';

const Footer = ():React.ReactPortal => {
  const {t} = useTranslation("ns1");
  return createPortal(
    <React.Fragment>
      <div className="footer">
        <div className="footer-l">
          <h5 className='p-m'>
          © Selfthetik 2022
          </h5>
        </div>
        <div className="footer-m">
          <a className='p-m footer-text' href="/privacy-policy">{t("privacyPolicy")}</a>
        </div>
        <div className="footer-r">
          <a className='p-m footer-text' href="/terms-conditions">{t("termsAndConditions")}</a>
        </div>
      </div>
    </React.Fragment>
    , document.getElementById("footer")!);
}

export default Footer