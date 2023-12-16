import React from 'react';
import Post from "./Post";
import cls from './Main.module.css';
const Main = () => {
    return (
        <main className={cls.main}>
            <Post />
        </main>
    );
}

export default Main;