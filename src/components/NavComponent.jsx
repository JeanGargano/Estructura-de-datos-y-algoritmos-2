import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavComponent.css';

const NavComponent = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Services
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavComponent;
