import React from "react";
import cls from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
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
const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Andrey' },
        { id: 2, name: 'Olesia' },
        { id: 3, name: 'Mark' },
        { id: 4, name: 'Nikita' },
        { id: 5, name: 'Vladimir' },
        { id: 6, name: 'Olga' },
        { id: 7, name: 'Nikolay' },
        { id: 8, name: 'Natalia' },
    ];

    return(
        <div className={cls.dialogs}>
            <ul className={cls.dialogItems}>
                <DialogItem name = {dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name = {dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name = {dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name = {dialogsData[3].name} id={dialogsData[3].id} />
                <DialogItem name = {dialogsData[4].name} id={dialogsData[4].id} />
                <DialogItem name = {dialogsData[5].name} id={dialogsData[5].id} />
                <DialogItem name = {dialogsData[6].name} id={dialogsData[6].id} />
                <DialogItem name = {dialogsData[7].name} id={dialogsData[7].id} />
            </ul>
            <div className={cls.messages}>
                <Message />
            </div>
        </div>
    )
}
export default Dialogs;