import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import PrivacyPolicy from '@pages/PrivacyPolicy';
import TermsConditions from '@pages/TermsConditions';

const App = ():React.JSX.Element => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/privacy-policy' element={ <PrivacyPolicy /> } />
          <Route path='/terms-conditions' element={ <TermsConditions /> } />
          <Route path='*' element={ <Home /> } />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App