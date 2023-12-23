import React from "react";
import cls from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map( d => <DialogItem name = {d.name} id={d.id} /> );

    return(
        <div className={cls.dialogs}>
            <ul className={cls.dialogItems}>
                { dialogsElements }
            </ul>
            <Message messages={props.state.messages}/>
        </div>
    )
}
export default Dialogs;