import React from 'react';
import s from'./Header.module.css'
import logo from './logo.svg'

const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt='logo'/>
            <div className={s.brand}>Samurai network</div>
        </header>
    );
};

export default Header;