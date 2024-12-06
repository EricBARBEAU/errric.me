// Import React
import React from 'react';
import ReactDOM from 'react-dom/client';
// CSS
import './css/index.scss';
// Modules import
import Contact from './modules/contact';
import Nav from './modules/header';
import Body from './modules/body';
import Footer from './modules/footer';


    /* APP BELOW
================================================== */
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div>
    <Contact />
    <Nav />
    <Body />
    <Footer />
  </div>
);
