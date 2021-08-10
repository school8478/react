import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* pages */
import Home from '../pages/Home';
import Board from '../pages/Board';
import About from '../pages/About';

function Main() {
    return (
        <main className="main">
        <Router>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/board" component={Board} />
        </Router>
        </main>
    )
};

export default Main;
