import React from "react";
import LogoImg from "./../../../images/logo.svg";
import cls from './Logo.module.css';
const Logo = () => {
    return (
        <a className={cls.logo} href="#l">
            <img src={LogoImg} alt="Logo" />
        </a>
    );
}
export default Logo;