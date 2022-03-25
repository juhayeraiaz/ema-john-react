import React from 'react';
import logo from '../../images/Logo.svg'
import '../Header/Header.css'
const Header = () => {
    return (
        <nav className='header'>
            <a href="/home">
                <img src={logo} alt="" /></a>
            <div>
                <a href="/Shop">Shop</a>
                <a href="/Order">Order</a>
                <a href="/Inventory">Inventory</a>
                <a href="/About">About</a>
            </div>
        </nav>
    );
};

export default Header;