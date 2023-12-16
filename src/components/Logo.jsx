import React from "react";
import LogoImg from "../logo.svg";
import cls from './Logo.module.css';
const Logo = () => {
    return (
        <a className={cls.logo} href="#l">
            <img src={LogoImg}/>
        </a>
    );
}
export default Logo;