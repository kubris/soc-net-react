import React from 'react';
import Profile from "../Profile/Profile";
import cls from './Main.module.css';
const Main = () => {
    return (
        <main className={cls.main}>
            <Profile />
        </main>
    );
}

export default Main;