import 'react-app-polyfill/ie9';
import 'react-app-polyfill/stable';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import './custom.scss';

import App from './App';

ReactDOM.render(<App />, document.getElementById('projectApp'));
