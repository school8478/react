import React from 'react';
import SlickType1 from '../components/SlickType1';

const User = () => {
    document.title = 'EBS - None Members Page';

    return (
    <>
    <section className="sec-slider">

        <article className="art-guide">
            <div className="dv-guide">
                <div>
                    <ul className="ul-guide-info">
                        <li>
                            <p>2 Annual Memberships for $180 (50% off). Offer terms apply.</p>
                        </li>
                        <li>
                            <button type="button">GET STARED</button>
                        </li>
                    </ul>
                </div>
            </div>
        </article>

        <SlickType1 />

        <article className="art-log-frm active">
            <div className="dv-logFrm">
                <h2>
                    <strong className="col-1">start</strong> of <strong>insight</strong>
                </h2>
                <p>
                    <span>Global leader, best-selling author, Nobel laureate and more</span>
                    <span>We provide systematic lectures including the knowledge</span>
                    <span>of the world's best scholars.</span>
                </p>
                <div className="dv-logFrm-info">

                    <input type="text" className="inp-logFrm" title="input[text] - Your mail address" placeholder="Your mail address" />
                    <button type="button" className="but-logFrm">sign up</button>

                    <p className="p-logFrm-guide">
                        <span>Enter your email and we will send you the latest</span>
                        <span>lectures and newsletters.</span>
                    </p>

                    <div className="check-basic block">
                        <label>
                            <input type="checkbox" title="checkbox" />
                            <i></i>
                            <span>By sharing your email, you agree to our Terms of Service and Privacy Policy.</span>
                        </label>
                    </div>

                </div>
            </div>
        </article>

    </section>

    <section className="sec-container">

        <article className="art-info"> 

            <div className="dv-info-title">
                <h2 className="bullet">The world's best scholars</h2>
                <a className="link">more</a>
            </div>                    

            <div className="dv-info-container">

                <ul className="ul-info type-1">                            

                    <li className="no-data">
                        <p>데이터가 없습니다.</p>
                    </li>

                    <li>
                        
                        <div className="dv-info-box">
                            
                            <div className="img-info type-1">
                                <a ><img src="../image/b-1.png" alt="image - contents" /></a>
                            </div>

                            <div className="img-info-box">

                                <h3>
                                    <a >Paul Kennedy (England, 1945)</a>
                                </h3>
                                <div className="img-info-box-author">
                                    <strong>Paul Kennedy</strong>
                                    <span>England, 1945</span>
                                </div>
                                <div className="img-info-box-content">
                                    <pre>
                                        Professor of History at Oxford University
                                        Professor of History at Yale University
                                    </pre>
                                </div>

                            </div>

                        </div>

                    </li>

                    <li>

                        <div className="dv-info-box">
                            
                            
                            <div className="img-info type-1">
                                <a ><img src="../image/b-2.png" alt="image - contents" /></a>
                            </div>

                            <div className="img-info-box">

                                <h3>
                                    <a >Joseph Samuel Nye (USA, 1937)</a>
                                </h3>
                                <div className="img-info-box-author">
                                    <strong>Joseph Samuel Nye</strong>
                                    <span>USA, 1937</span>
                                </div>
                                <div className="img-info-box-content">
                                    <pre>
                                        international political scientist
                                        Professor at Harvard University
                                    </pre>
                                </div>

                            </div>

                        </div>

                    </li>

                    <li>

                        <div className="dv-info-box">
                            
                            <div className="img-info type-1">
                                <a ><img src="../image/b-3.png" alt="image - contents" /></a>
                            </div>

                            <div className="img-info-box">

                                <h3>
                                    <a >Paul Krugman (USA, 1953)</a>
                                </h3>
                                <div className="img-info-box-author">
                                    <strong>Paul Krugman</strong>
                                    <span>USA, 1953</span>
                                </div>
                                <div className="img-info-box-content">
                                    <pre>
                                        American intellectual, economist, 
                                        columnist, Author
                                    </pre>
                                </div>

                            </div>

                        </div>

                    </li>

                    <li>
                        
                        <div className="dv-info-box">
                            
                            <div className="img-info type-1">
                                <a ><img src="../image/b-4.png" alt="image - contents" /></a>
                            </div>

                            <div className="img-info-box">

                                <h3>
                                    <a >Thomas Frey (USA, 1945)</a>
                                </h3>
                                <div className="img-info-box-author">
                                    <strong>Thomas Frey</strong>
                                    <span>USA, 1945</span>
                                </div>
                                <div className="img-info-box-content">
                                    <pre>
                                        World's best futurist recognized by Google
                                    </pre>
                                </div>

                            </div>

                        </div>

                    </li>

                </ul>

            </div>

        </article>

    </section>

    <section className="sec-video">

        <article className="art-video">
            <div>
                <div className="video-info full info-none">
                    <div className="vt-video detail">
                        <video src="../video/EBS_INTRO_1.mp4" poster="../image/img-individual-intro.png"></video>
                    </div>
                    
                    <div className="vt-video-info">
                        <div className="vt-video-thumb">
                            <img src="" alt="" />
                        </div>
                        <div className="vt-video-thumb-info">
                            <h3>
                                <a >Paul Krugman (USA, 1953)</a>
                            </h3>

                            <div className="vt-video-info-author">
                                <strong>Paul Krugman</strong>
                                <span>USA, 1953</span>
                            </div>

                            <div className="vt-video-info-content">
                                <pre>
                                    American intellectual, economist, 
                                    columnist, Author
                                </pre>
                            </div>
                        </div>

                        video controls 
                        <div className="vt-video-play-controls">
                            <a>play</a>
                        </div>
                        <div className="vt-video-volume-controls">

                        </div>
                        <div className="vt-video-delete-controls">
                            <a>delect</a>
                        </div>
                        <div className="vt-video-view-controls">
                            <a>go to className</a>
                        </div>

                        <div className="vt-video-times-controls">

                        </div>
                        video controls 

                    </div>
                </div>
            </div>
        </article>

        <article className="art-guide">
            <div className="dv-guide">
                <div>
                    <ul className="ul-guide-info">
                        <li>
                            <p className="uppercase">Sign up and watch the world's best lectures for free.</p>
                        </li>
                        <li>
                            <button type="button">GET STARED</button>
                        </li>
                    </ul>
                </div>
            </div>
        </article>

    </section>

    <section className="sec-container">

        <article className="art-info">

            <div className="dv-info-title">
                <h2 className="bullet">Frequently asked questions</h2>
                <a className="link">more</a>
            </div>                    

            <div className="dv-info-container">

                <ul className="ul-faq">
                    
                    <li className="no-data">
                        <p>데이터가 없습니다.</p>
                    </li>

                    <li>
                        <div className="dv-question">
                            <div className="dv-question-info">
                                <span className="question-box">Q</span>
                                <span className="question-info">Membership is not automatically registered through the className invitation link.</span>
                                <i className="faq-arrow">view arrow</i>
                            </div>
                        </div>
                        <div className="dv-answer">
                            <div className="dv-answer-info">
                                <span className="answer-box">A</span>
                                <pre>
                                    When accessing the online className, the screen may be exposed when the service is not smooth, closing the 
                                    connected browser, You can reconnect by pressing [Ctrl + Shift + R].
                                </pre>
                            </div>

                            <div className="dv-answer-file">
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>온라인클래스가이드.pdf (82kb)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>온라인클래스가이드.hwp (128KB)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="dv-question">
                            <div className="dv-question-info">
                                <span className="question-box">Q</span>
                                <span className="question-info">I am a student and I want to withdraw from the online className. (Including incorrect registration)</span>
                                <i className="faq-arrow">view arrow</i>
                            </div>
                        </div>
                        <div className="dv-answer">
                            <div className="dv-answer-info">
                                <span className="answer-box">A</span>
                                <pre>
                                    When accessing the online className, the screen may be exposed when the service is not smooth, closing the 
                                    connected browser, You can reconnect by pressing [Ctrl + Shift + R].
                                </pre>
                            </div>

                            <div className="dv-answer-file">
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>온라인클래스가이드.pdf (82kb)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>온라인클래스가이드.hwp (128KB)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="dv-question">
                            <div className="dv-question-info">
                                <span className="question-box">Q</span>
                                <span className="question-info">When connecting to the online className, there is no change on the screen as loading is in progress.</span>
                                <i className="faq-arrow">view arrow</i>
                            </div>
                        </div>
                        <div className="dv-answer">
                            <div className="dv-answer-info">
                                <span className="answer-box">A</span>
                                <pre>
                                    When accessing the online className, the screen may be exposed when the service is not smooth, closing the 
                                    connected browser, You can reconnect by pressing [Ctrl + Shift + R].
                                </pre>
                            </div>

                            
                            <div className="dv-answer-file">
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>관련 공문.pdf (82kb)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내.hwp (128KB)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </li>

                    <li>
                        <div className="dv-question">
                            <div className="dv-question-info">
                                <span className="question-box">Q</span>
                                <span className="question-info">The student's learning contents are not checked in the member management. Where can I check the connected browser. The student's learning contents are not checked in the member management. Where can I check the connected browser.</span>
                                <i className="faq-arrow">view arrow</i>
                            </div>
                        </div>
                        <div className="dv-answer">
                            <div className="dv-answer-info">
                                <span className="answer-box">A</span>
                                <pre>
                                    When accessing the online className, the screen may be exposed when the service is not smooth, closing the 
                                    connected browser, You can reconnect by pressing [Ctrl + Shift + R].
                                </pre>
                            </div>

                            
                            <div className="dv-answer-file">
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>관련 공문.pdf (82kb)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내.hwp (128KB)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="dv-question">
                            <div className="dv-question-info">
                                <span className="question-box">Q</span>
                                <span className="question-info">If you modify the lecture of the created course, it is automatically reflected in the already distributed className.</span>
                                <i className="faq-arrow">view arrow</i>
                            </div>
                        </div>
                        <div className="dv-answer">
                            <div className="dv-answer-info">
                                <span className="answer-box">A</span>
                                <pre>
                                    When accessing the online className, the screen may be exposed when the service is not smooth, closing the 
                                    connected browser, You can reconnect by pressing [Ctrl + Shift + R].
                                </pre>
                            </div>                            
                            <div className="dv-answer-file">
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>관련 공문.pdf (82kb)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내.hwp (128KB)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </li>

                    <li>
                        <div className="dv-question">
                            <div className="dv-question-info">
                                <span className="question-box">Q</span>
                                <span className="question-info">When connecting to the online className, there is no change on the screen as loading is in progress.</span>
                                <i className="faq-arrow">view arrow</i>
                            </div>
                        </div>
                        <div className="dv-answer">
                            <div className="dv-answer-info">
                                <span className="answer-box">A</span>
                                <pre>
                                    When accessing the online className, the screen may be exposed when the service is not smooth, closing the 
                                    connected browser, You can reconnect by pressing [Ctrl + Shift + R].
                                </pre>
                            </div>

                            <div className="dv-answer-file">
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>관련 공문.pdf (82kb)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내.hwp (128KB)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </li>

                    <li>
                        <div className="dv-question">
                            <div className="dv-question-info">
                                <span className="question-box">Q</span>
                                <span className="question-info">Is it possible to transmit sound when sharing an application?</span>
                                <i className="faq-arrow">view arrow</i>
                            </div>
                        </div>
                        <div className="dv-answer">
                            <div className="dv-answer-info">
                                <span className="answer-box">A</span>
                                <pre>
                                    When accessing the online className, the screen may be exposed when the service is not smooth, closing the 
                                    connected browser, You can reconnect by pressing [Ctrl + Shift + R].
                                </pre>
                            </div>

                            <div className="dv-answer-file">
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>관련 공문.pdf (82kb)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                                <div className="dv-file-down">
                                    <i className="ico-file">파일첨부</i>
                                    <span>붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내붙임1.기업인 출입국종합지원센터 소개 및 격리 면제제도 안내.hwp (128KB)</span>
                                    <div>
                                        <a >다운로드</a>
                                        <a >바로보기</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </li>

                </ul>

            </div>

        </article>

    </section>

    <section className="sec-container">

        <article className="art-banner">
            <div>

                <div className="dv-banner-info">

                    <div className="dv-banner-img">
                        <img src="../image/img-banner.png" alt="main banner img" />
                    </div>

                    <div className="dv-banner-img-info">
                        <h3>
                            <span>GREATMINDS FOR</span>
                            <span>BUSINESSES</span>
                        </h3>
                        <p>
                            <span>Group rates (10-30% off) are available with the purchase of 20 or</span>
                            <span>more annual memberships.</span>
                        </p>
                        <div className="dv-btn-box">
                            <button type="button" className="btn-basic uppercase type-1">Get a Quote</button>
                            <a href="메인_기업비로그인.html" target="_blank"><button type="button" className="btn-basic uppercase">Learn More</button></a>
                        </div>
                    </div>

                </div>

            </div>
        </article>

    </section>
    </>
    )
};

export default User;