import React from 'react';
import { Route } from 'react-router-dom';

/* pages */
import Home from '../pages/Home';
import Board from '../pages/Board';
import About from '../pages/About';

const Main = () => {
    return (
    <>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/board" component={Board} />
    </>
    )
};

export default Main;
