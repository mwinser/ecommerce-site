import React from 'react';
import ReactDOM from 'react-dom';
import {ContextProvider} from "./Context"
import {HashRouter as Router} from "react-router-dom"

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

