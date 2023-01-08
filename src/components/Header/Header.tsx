import React from 'react';
import s from'./Header.module.css'
import logo from './logo1.webp'

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.logo}>
                <div>Samurai's</div>
            <div><img src={logo} alt='logo'/> </div>
            <div>Way</div>
            </div>
        </header>
    );
};

export default Header;