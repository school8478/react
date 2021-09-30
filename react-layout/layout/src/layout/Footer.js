import appApple from '../image/icon-app-apple.png';
import appAndroid from '../image/icon-app-android.png';

const Footer = () => {
    return (
    <footer className="footer">
        <section className="sec-footer-container">
            <article className="art-footer-info">
                <div>
                    <div className="dv-footer-tbl">
                        
                        <div className="dv-footer-tbl-info">
                            <h6>Category</h6>

                            <ul>
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
                        </div>

                        <div className="dv-footer-tbl-info">
                            <h6>About</h6>

                            <ul>
                                <li>
                                    <a >Diversity, Equity, and Inclusion</a>
                                </li>
                                <li>
                                    <a >Article</a>
                                </li>
                                <li>
                                    <a >Privacy</a>
                                </li>
                                <li>
                                    <a >Terms</a>
                                </li>
                                <li>
                                    <a >Gift</a>
                                </li>
                                <li>
                                    <a >For Businesses</a>
                                </li>
                                <li>
                                    <a >Customer</a>
                                </li>
                            </ul>
                        </div>

                        <div className="dv-footer-tbl-info social">
                            <h6>Social</h6>

                            <ul>
                                <li>
                                    <a >
                                        <span className="spn-ico ico-twitter">Twitter</span>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <span className="spn-ico ico-instagram">Instagram</span>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <span className="spn-ico ico-facebook">Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a >
                                        <span className="spn-ico ico-youtube">Youtube</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="dv-footer-tbl-info download">
                            <h6>Download</h6>

                            <ul>
                                <li>
                                    <a  className="app-download">
                                        <img src={appApple} alt="img - apple download" />
                                    </a>
                                </li>
                                <li>
                                    <a  className="app-download">
                                        <img src={appAndroid} alt="img - android download" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="dv-footer-tbl-info info">
                            <h6>info</h6>

                            <ul>
                                <li>
                                    <div className="select-basic">
                                        <p>ENG(US)</p>
                                        <ul>
                                            <li className="active">
                                                <a >ENG(US)</a>
                                            </li>
                                            <li>
                                                <a >KOR</a>
                                            </li>
                                        </ul>
                                        <span className="select-bg-close"></span>
                                    </div>
                                </li>
                                <li>
                                    <a  className="link-siteMap">
                                        <span>site map</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className="dv-copyright">
                        <div className="logo">
                            <a href="/">
                                <span className="logo-bg">logo</span>
                                <span className="logo-info">greatminds</span>
                            </a>
                        </div>
                        <p>Copyright ⓒ 2021 <strong>thegreatminds</strong> All Rights Reserved.</p>
                    </div>
                </div>
            </article>
        </section>
    </footer>
    )
};

export default Footer;