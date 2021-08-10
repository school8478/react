import React, { useEffect } from 'react';

const Header = () => {
    useEffect(() => {
        // if(!$eventEnd) scroll();
        scroll();
    });
    
    return (
        <header className="header">
            <section className="sec-container full">
                <article className="art-container">
                    <div className="dv-logo">
                        <a href="/">
                            <span className="spn-logo">LOGO</span>
                            <span className="span-logo-info"></span>
                        </a>
                    </div>

                    <div className="dv-gnb">
                        <a href="/">Home</a>
                        <a href="/board">Board</a>
                        <a href="/about">About</a>
                    </div>

                    <div className="dv-total-search">
                        <input
                            type="text"
                            placeholder="total search text"
                        />
                    </div>
                </article>
            </section>
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