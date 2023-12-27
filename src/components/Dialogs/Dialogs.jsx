import React from "react";
import cls from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import DialogsSvg from "./../../images/send.svg";

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map( d => <DialogItem name = {d.name} id={d.id} key={d.id} /> );

    return(
        <div className={cls.dialogs}>
            <ul className={cls.dialogItems}>
                { dialogsElements }
            </ul>
            <div className={cls.messageWrapper}>
                <Message messages={props.state.messages}/>
                <div className={cls.addMessageWrapper}>
                    <textarea placeholder="Type message.."></textarea>
                    <button className={cls.addMessageButton}>
                        <img src={ DialogsSvg } alt="Send"/>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Dialogs;