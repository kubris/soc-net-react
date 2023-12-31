import React from 'react';
import Socials from "./Socials/Socials";
import Logo from './Logo/Logo';
import cls from './Header.module.css';
const Header = () => {
    return (
        <header className={cls.header}>
            <nav>
                <Logo />
                <Socials />
            </nav>
        </header>
    );
}

export default Header;