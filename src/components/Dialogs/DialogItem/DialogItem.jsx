import React from "react";
import cls from './DialogsItem.module.css';
import {NavLink} from "react-router-dom";
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <li>
            <NavLink className={cls.dialog} activeClassName={cls.active} to={path}>
                {props.name}
            </NavLink>
        </li>
    )
}
export default DialogItem;