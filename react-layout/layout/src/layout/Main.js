import React from 'react';
import { Route } from 'react-router-dom';

/* pages */
import Home from '../pages/Home';
import Board from '../pages/Board';
import About from '../pages/About';

function Main() {
    return (
        <main className="main">
        <Route exact path="/" component={Home} />
        <Route path="/board" component={Board} />
        <Route path="/about" component={About} />
        </main>
    )
};

export default Main;
