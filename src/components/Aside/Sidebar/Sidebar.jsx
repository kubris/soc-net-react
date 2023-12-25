import React from "react";
import cls from './Sidebar.module.css';
import Friends from "./Friends/Friends";

const Sidebar = (props) => {
    return (
        <div className={cls.sidebar}>
            <Friends state={props.state} />
        </div>
    );
}

export default Sidebar;