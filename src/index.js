import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Amplify } from "aws-amplify";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { BrowserRouter } from "react-router-dom";


import config from "./aws-exports";

Amplify.configure(config);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AmplifyProvider>
      <App />
    </AmplifyProvider>
    </BrowserRouter>
  </React.StrictMode>
);
