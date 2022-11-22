import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import PrivacyPolicy from '@pages/PrivacyPolicy';
import TermsConditions from '@pages/TermsConditions';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={ <Home /> } />
          <Route exact path='/privacy-policy' element={ <PrivacyPolicy /> } />
          <Route exact path='/terms-conditions' element={ <TermsConditions /> } />
          <Route path='*' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App