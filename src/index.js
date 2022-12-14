import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from 'jquery';
import Popper from 'popper.js';

import "./assets/vendor/animate.css/animate.min.css";
  import "./assets/vendor/aos/aos.css";
  import "./assets/vendor/bootstrap/css/bootstrap.min.css";
  import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
  import "./assets/vendor/boxicons/css/boxicons.min.css";
  import "./assets/vendor/remixicon/remixicon.css";
  import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/style.css";

// import "./assets/vendor/purecounter/purecounter";
//   import "./assets/vendor/aos/aos";
//   import "./assets/vendor/bootstrap/js/bootstrap.bundle.min";
//   import "./assets/vendor/swiper/swiper-bundle.min";
//   import "./assets/vendor/php-email-form/validate";
//   import "./assets/js/main";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
