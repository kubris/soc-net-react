import React from "react";
import cls from './Aside.module.css';
import Menu from "./Menu/Menu";
import Sidebar from "./Sidebar/Sidebar";

const Aside = (props) => {
    return (
        <aside className={cls.aside}>
            <Menu />
            <Sidebar state={props.state} />
        </aside>
    );
}

export default Aside;