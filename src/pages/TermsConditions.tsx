import React from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const TermsConditions = (): React.JSX.Element=>{
  return (
    <React.Fragment>
      <Header />
      <section className=''>
        <div className=''>
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
            <Viewer fileUrl='/docs/terms-conditions.pdf' />
          </Worker>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}

export default TermsConditions;