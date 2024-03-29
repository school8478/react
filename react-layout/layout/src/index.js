import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'core-js/stable';

import 'regenerator-runtime/runtime';
import 'core-js/features/string/repeat';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

/* layout comprise */
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';
import LogFrm from './layout/LogFrm';

import reportWebVitals from './reportWebVitals';

/* layout css */
import './css/fonts.css';
import './css/reset.css';
import './css/common.css';
import './css/responsive.css';

ReactDOM.render(
    <React.StrictMode>
    <Router>
    <Header />
    <Main />
    <Footer />
    <LogFrm />
    </Router>
    </React.StrictMode>,
    document.getElementById('layout')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
