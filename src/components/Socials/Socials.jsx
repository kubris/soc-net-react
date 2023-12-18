import React from 'react';
import Telegram from '../../images/tg.svg';
import Whatsapp from '../../images/ws.svg';
import Github from '../../images/gh.svg';
import cls from './Socials.module.css';
const Socials = () => {
    return (
        <ul className={cls.socials}>
            <li>
                <a href="/">
                    <span>Telegram</span>
                    <img src={Telegram} alt="Telegram"/>
                </a>
            </li>
            <li>
                <a href="/">
                    <span>Whatsapp</span>
                    <img src={Whatsapp} alt="Whatsapp"/>
                </a>
            </li>
            <li>
                <a href="/">
                    <span>Github</span>
                    <img src={Github} alt="Github"/>
                </a>
            </li>
        </ul>
    );
}
export default Socials;