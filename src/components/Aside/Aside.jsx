import React from "react";
import ProfileImg from "../../images/profile.svg";
import MessageImg from "../../images/message.svg";
import NewsImg from "../../images/news.svg";
import MusicImg from "../../images/music.svg";
import SettingsImg from "../../images/settings.svg";
import cls from './Aside.module.css';
import {NavLink} from "react-router-dom";
const Aside = () => {
    return (
        <aside className={cls.aside}>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/profile" activeClassName={cls.active}>
                            <span>Profile</span>
                            <img src={ProfileImg} alt="Profile"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dialogs" activeClassName={cls.active}>
                            <span>Messages</span>
                            <img src={MessageImg} alt="Messages"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/news" activeClassName={cls.active}>
                            <span>News</span>
                            <img src={NewsImg} alt="News"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/music" activeClassName={cls.active}>
                            <span>Music</span>
                            <img src={MusicImg} alt="Music"/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={cls.settings} to="/settings" activeClassName={cls.active}>
                            <span>Settings</span>
                            <img src={SettingsImg} alt="Settings"/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

export default Aside;