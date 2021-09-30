import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    useEffect(() => {
        
    });
    
    return (
    <header className="header">
        <section className="sec-header-container">
            <article className="art-header-info">

                <div className="logo">
                    <a href="/">
                        <span className="logo-bg">logo</span>
                        <span className="logo-info">greatminds</span>
                    </a>
                </div>

                <div className="logo-type">
                    <div className="select-basic">
                        <p>all categories</p>
                        <ul className="cate">
                            <li className="active">
                                <a >all categories</a>
                            </li>
                            <li>
                                <a >Business</a>
                            </li>
                            <li>
                                <a >Food</a>
                            </li>
                            <li>
                                <a >Design &amp; Style</a>
                            </li>
                            <li>
                                <a >Arts &amp; entertainment</a>
                            </li>
                            <li>
                                <a >Sports &amp; Gaming</a>
                            </li>
                            <li>
                                <a >Science &amp; Tech</a>
                            </li>
                            <li>
                                <a >Community &amp; Government</a>
                            </li>
                        </ul>
                        <span className="select-bg-close"></span>
                    </div>

                    <div className="select-basic prograss">
                        <p>My prograss</p>
                        <ul className="cate">
                            <li className="active">
                                <a >prograss</a>
                            </li>
                            <li>
                                <a >prograss1</a>
                            </li>
                            <li>
                                <a >prograss2</a>
                            </li>
                        </ul>
                        <span className="select-bg-close"></span>
                    </div>
                </div>

                <div className="info">
                    
                    <div className="info-option">

                        <a  className="btn-guide">customer</a> 

                        <a >
                            <span>LOGOUT</span>
                        </a>
                        <a >
                            <span>ENTERPRISE</span>
                        </a>

                        <a >
                            <span>LOGIN</span>
                        </a>
                        <a >
                            <span>ENTERPRISE</span>
                        </a>

                        <div className="select-basic">
                            <p>ENG</p>
                            <ul>
                                <li className="active">
                                    <a >ENG</a>
                                </li>
                                <li>
                                    <a >KOR</a>
                                </li>
                            </ul>
                            <span className="select-bg-close"></span>
                        </div>

                    </div>

                    <div className="info-btn">

                        <div className="btn-all-search">
                            <div className="dv-all-search-frm">
                                <div>
                                    <div className="all-search-frm-open">all search open</div>
                                    <div className="all-search-frm-close">all search close</div>

                                    <div className="dv-all-search-frm-info">
                                        <input type="text" title="input - search all" placeholder="search text input" />
                                        <div className="dv-all-search-frm-info-list">
                                            <ul>
                                                <li>
                                                    <a ><em>입력된값</em>유사어</a>
                                                </li>
                                                <li>
                                                    <a ><em>입력된값</em>유사어</a>
                                                </li>
                                                <li>
                                                    <a ><em>입력된값</em>유사어</a>
                                                </li>
                                                <li>
                                                    <a ><em>입력된값</em>유사어</a>
                                                </li>
                                                <li>
                                                    <a ><em>입력된값</em>유사어</a>
                                                </li>
                                                <li>
                                                    <a ><em>입력된값</em>유사어</a>
                                                </li>
                                                <li>
                                                    <a ><em>입력된값</em>유사어</a>
                                                </li>
                                                <li>
                                                    <a ><em>입력된값</em>유사어</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="btn-all-gnb">
                            <span>bar</span>
                            <span>bar</span>
                            <span>bar</span>
                        </div>

                    </div>

                </div>

            </article>

            <article className="art-all-gnb">
                <div className="dv-all-gnb-frm-close">all gnb close</div>
                <div className="dv-all-gnb-frm">
                    <div>
                        <div className="dv-all-gnb-frm-info">
                            
                        </div>
                    </div>
                </div>
            </article>

        </section>
    </header>
    )
};

export default Header;