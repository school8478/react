import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'core-js/features/string/repeat';

import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './scss/index.scss';

/* common */
import Header from './layout/Header';
import Footer from './layout/Footer';
import Main from './layout/Main';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
    <Header />
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    <Footer />
    </React.StrictMode>,
    document.getElementById('layout')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
