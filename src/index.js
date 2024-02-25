import React from "react";
import {createRoot} from 'react-dom/client';
import App from "@routes/App";
import './index.css';
import { ModalProvider } from "./Contexts/Modal";

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ModalProvider>
      <App/>
    </ModalProvider>
  </React.StrictMode>
)