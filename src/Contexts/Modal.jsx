import React from 'react';
import { createContext } from 'react';

const ModalContext = createContext();

const ModalProvider = ({children})=>{
  return (
    <ModalContext.Provider
    >
      {children}
    </ModalContext.Provider>
  )
}

export {ModalContext, ModalProvider}