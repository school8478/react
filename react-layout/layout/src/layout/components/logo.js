import React from 'react';
import { Link as Logo } from 'react-router-dom';

const LogoInfo = () => {
    return (
        <div className="dv-logo">
            <Logo className="logo-link" to="/">
                <span className="spn-logo">LOGO</span>
                <span className="spn-logo-info">LOGO</span>
            </Logo>
        </div>
    )
};

export default LogoInfo;