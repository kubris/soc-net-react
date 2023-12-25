import React from "react";
import cls from './FriendOnline.module.css';
import UnknownImg from "./../../../../../images/unknown.jpg";
import {NavLink} from "react-router-dom";
const FriendOnline = (props) => {
    return (
        <li>
            <NavLink to="/" className={cls.friendsLink}>
                <img src={UnknownImg} alt={props.name}/>
                <span>{props.name}</span>
            </NavLink>
        </li>
    );
}
export default FriendOnline;