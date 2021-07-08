import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Nav from './Home/Navi'
import reportWebVitals from './reportWebVitals';
import Frame from 'react-frame-component';
import { BrowserRouter } from "react-router-dom";





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('main')
);

ReactDOM.render(
    <React.StrictMode>
      <Nav />
    </React.StrictMode>,
    document.getElementById('nava')
  );
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();