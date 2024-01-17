import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
// import { Provider } from "@reduxjs/toolkit";
// import store from './store.js';



ReactDOM.createRoot(document.getElementById('root')!).render(
    // <Provider store={store}>
        <ChakraProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ChakraProvider>
    // </Provider>
)

