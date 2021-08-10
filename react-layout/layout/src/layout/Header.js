import React, { useEffect } from 'react';

import LogoInfo from './components/logo';
import SearchInfo from './components/search';
import NavInfo from './components/nav';

const Header = () => {
    useEffect(() => {
        // if(!$eventEnd) scroll();
        scroll();
    });
    
    return (
        <header className="header">
            <article className="art-container full">
                <LogoInfo />
                <SearchInfo />
                <NavInfo />
            </article>
        </header>
    )
};

const scroll = () => {
    const $header = document.getElementsByClassName('header')[0];
    const $headHei = $header.clientHeight;

    // 메인 컨텐츠 header 높이 변경
    $header.style.height = $headHei + 'px';

    if (!$header) return;

    window.addEventListener('scroll', (e) => {
        const $pos = window.scrollY;

        if( $pos > $headHei ) {
            $header.classList.add("scroll");
        } else {
            $header.classList.remove("scroll");
        }
    });  

    // $eventEnd = true;
}
// let $eventEnd = false;

export default Header;