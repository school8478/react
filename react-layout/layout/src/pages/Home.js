import React, {useState, useEffect} from 'react';

/* loading */
import LoadingInfo from '../layout/components/loading';

const Home = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            document.body.style = '';
        }, 2000);
    }, []);

    return (
    <>
    {
    loading ? 
    <LoadingInfo />
    :
    <main className="main">
        <article className="art-container">
            <h1>Home</h1>
            <p>Home page</p>
        </article>
    </main>
    }
    </>
    )
};

export default Home;