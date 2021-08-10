import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        if(!$eventEnd) scroll();
    });
    
    return (
        <header className="header">
            <section className="sec-container full">
                <article className="art-container">
                    Header page
                </article>
            </section>
        </header>
    )
};

function scroll() {
    const $header = document.getElementsByClassName('header')[0];

    if (!$header) return;

    window.addEventListener('scroll', (e) => {
        const $pos = window.scrollY;

        if( $pos > 0 ) {
            $header.classList.add("scroll");
        } else {
            $header.classList.remove("scroll");
        }
    });  

    // $eventEnd = true;
}
// let $eventEnd = false;

export default Header;