import Header from './common/Header';
import Footer from './common/Footer';

import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

const App = () => {
    return (
        <>
        <Header />
        <main>
            <Router>
                <Route src='/' />
            </Router>
        </main>
        <Footer />
        </>
    )
}

export default App;
