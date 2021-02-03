import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./containers/App/index";
import reportWebVitals from "./reportWebVitals";
import {IntlProvider} from "react-intl"

import {LocalizationProvider} from './context/LocalizationContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <IntlProvider>
      <LocalizationProvider>
        
      <App />

      </LocalizationProvider>
      </IntlProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
