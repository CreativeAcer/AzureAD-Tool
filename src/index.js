import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/**
 * MSAL
 */
 import { MsalProvider } from "@azure/msal-react";
 import { PublicClientApplication } from "@azure/msal-browser";
 import { msalConfig } from "./authConfig";
/**
 * REACT ROUTER
 */
 import { BrowserRouter } from 'react-router-dom';

export const msalInstance = new PublicClientApplication(msalConfig);

  // Component
const AppProvider = () => (
  <MsalProvider instance={msalInstance}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MsalProvider>
);

ReactDOM.render(<AppProvider />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
