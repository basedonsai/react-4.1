import React from 'react';
import './Header.css';
import sen from './sentinels.svg';
import "bootstrap/dist/css/bootstrap.css";


const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={sen} alt="Logo" />
            </div>
            <ul className="navbar-links justify-content-center">
                <li>HOME</li>
                <li>PARTNERS</li>
                <li>TEAMS</li>
                <li>CONTENT</li>
                <li>SEN SOCIETY</li>

            </ul>
            <div className="navbar-icons">
            <i class='bx bx-cart'></i>            
            </div>
        </nav>
    );
};

export default Header;
