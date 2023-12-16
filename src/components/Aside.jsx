import React from "react";
import ProfileImg from "../images/profile.svg";
import MessageImg from "../images/message.svg";
import NewsImg from "../images/news.svg";
import MusicImg from "../images/music.svg";
import SettingsImg from "../images/settings.svg";
import cls from './Aside.module.css';
const Aside = () => {
    return (
        <aside className={cls.aside}>
            <nav>
                <ul>
                    <li><a href="#s">
                        <span>Profile</span>
                        <img src={ProfileImg} alt="Profile"/>
                    </a></li>
                    <li><a href="#s">
                        <span>Messages</span>
                        <img src={MessageImg} alt="Messages"/>
                    </a></li>
                    <li><a href="#s">
                        <span>News</span>
                        <img src={NewsImg} alt="News"/>
                    </a></li>
                    <li><a href="#s">
                        <span>Music</span>
                        <img src={MusicImg} alt="Music"/>
                    </a></li>
                    <li><a className={cls.settings} href="#s">
                        <span>Settings</span>
                        <img src={SettingsImg} alt="Settings"/>
                    </a></li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;