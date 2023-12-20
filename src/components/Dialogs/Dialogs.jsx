import React from "react";
import cls from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
const Dialogs = (props) => {
    return(
        <div className={cls.dialogs}>
            <ul className={cls.dialogItems}>
                <li>
                    <NavLink className={cls.dialog} activeClassName={cls.active} to="/">
                        Andrey
                    </NavLink>
                </li>
                <li>
                    <NavLink className={cls.dialog} activeClassName={cls.active} to="/">
                        Olesia
                    </NavLink>
                </li>
                <li>
                    <NavLink className={cls.dialog} activeClassName={cls.active} to="/">
                        Mark
                    </NavLink>
                </li>
                <li>
                    <NavLink className={cls.dialog} activeClassName={cls.active} to="/">
                        Nikita
                    </NavLink>
                </li>
                <li>
                    <NavLink className={cls.dialog} activeClassName={cls.active} to="/">
                        Vladimir
                    </NavLink>
                </li>
                <li>
                    <NavLink className={cls.dialog} activeClassName={cls.active} to="/">
                        Olga
                    </NavLink>
                </li>
                <li>
                    <NavLink className={cls.dialog} activeClassName={cls.active} to="/">
                        Nikolai
                    </NavLink>
                </li>
                <li>
                    <NavLink className={cls.dialog} activeClassName={cls.active} to="/">
                        Natalia
                    </NavLink>
                </li>
            </ul>
            <div className={cls.messages}>
                <Message />
            </div>
        </div>
    )
}
export default Dialogs;