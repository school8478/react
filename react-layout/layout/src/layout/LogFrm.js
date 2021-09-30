import React, { useEffect } from 'react';

const LogFrm = () => {
    useEffect(() => {
        
    });
    
    return (
        <section className="sec-layer-popup" id="layerLog">
            <article className="art-layer-popup">
                <div className="dv-layer-bg">
                    <span>bg</span>
                </div>
                <div className="dv-layer-info size-1">
                    <div className="dv-layer-close">
                        <span>close</span>
                    </div>

                    <div className="dv-info-log">

                        <h2>MEMBER LOGIN</h2>

                        <div className="dv-info-log-input">
                            <input type="text" name="user_id" title="input - log id" className="inp-basic" />
                            <span>ID (E-mail)</span>
                        </div>
                        
                        <div className="dv-info-log-input">
                            <input type="password" name="user_password" title="input - log password" className="inp-basic" />
                            <span>PASSWORD</span>
                        </div>

                        <div className="dv-btn-box">
                            <button type="submit" className="btn-basic type-1 full">LOGIN</button>
                        </div>
                        
                        <div className="dv-info-log-info">

                            <div className="check-basic block">
                                <label>
                                    <input type="checkbox" title="input - log check" />
                                    <i></i>
                                    <span>Save login information</span>
                                </label>
                            </div>

                            <div className="dv-info-log-option">

                                <a >
                                    <span>Find ID·Password</span>
                                </a>
                                <a >
                                    <span>Sign Up</span>
                                </a>

                            </div>

                        </div>

                        <div className="dv-info-log-info">

                            <div className="dv-info-log-emailLink">

                                <a  className="google">
                                    <span>GOOGLE LOGIN</span>
                                </a>
                                <a  className="facebook">
                                    <span>FACEBOOK LOGIN</span>
                                </a>
                                <a  className="apple">
                                    <span>APPLE LOGIN</span>
                                </a>

                            </div>

                            <div className="dv-btn-box">
                                <button type="button" className="btn-basic type-1 full">Not a member? Sign up now.</button>
                            </div>

                        </div>

                    </div>
                </div>
            </article>
        </section>
    )
};

export default LogFrm;