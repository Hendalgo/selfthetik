import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@routes/App'
import './index.css'
import '@locales/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
)
