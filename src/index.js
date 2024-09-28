// This website is Designed, Developed and Conceptualization by Ayush Rathor (Indian Institute of Information Technology Raichur) 
// Conceptualization and content creation by Priodyuti Pradhan (Indian Institute of Information Technology Raichur)
// Images used by the websites are acknowledged and cited 

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import "./home.css";
import "./publication.css";
import "./css/CS302.css";
import "./bg.css";
import "./teaching.css";
import "./research.css";
import "./lab.css";
import "./navbar.css";
import "./contact.css";
import "./highlight.css"
import App from './App';

ReactDOM.render( 
    <BrowserRouter>
       <App />
    </BrowserRouter>,
document.getElementById("root"));


