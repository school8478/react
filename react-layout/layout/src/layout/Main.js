import React from 'react';
import { Route } from 'react-router-dom';

/* pages */
import User from '../pages/User';

const Main = () => {
    return (
    <section className="main">
    <Route exact path="/" component={User} />
    </section>
    )
};

export default Main;
