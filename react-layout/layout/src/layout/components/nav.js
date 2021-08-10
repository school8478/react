import React from 'react';
import { NavLink } from 'react-router-dom';

const NavInfo = () => {
    return (
        <nav className="nav-info">
            <NavLink 
                className="nav-info-link"
                to="/"
                activeClassName="active"
            >
            Home
            </NavLink>
            <NavLink 
                className="nav-info-link"
                to="/about"
                activeClassName="active"
            >
            About
            </NavLink>
            <NavLink 
                className="nav-info-link"
                to="/board"
                activeClassName="active"
            >
            Board
            </NavLink>
        </nav>
    )
};

export default NavInfo;