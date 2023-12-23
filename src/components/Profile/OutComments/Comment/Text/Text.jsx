import React from "react";
import cls from './Text.module.css';
const Text = (props) => {
    return (
       <div className={cls.block}>
           <div className={cls.text}>
               {props.message.text}
            </div>
           <div className={cls.likes}>{props.message.likes}</div>
       </div>
    );
}
export default Text;