import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react';
// import { persistStore } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";

import App from './App.tsx'
// import store from './reducers/store';

// const persistor = persistStore(store)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
    {/* <ChakraProvider store={store}> */}
        {/* <PersistGate loading={null} persistor={persistor}> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        {/* </PersistGate> */}
    </ChakraProvider>
  </React.StrictMode>,
)

