import React from 'react';
import cls from './App.module.css';
import Header from './components/Header/Header.jsx';
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
const App = () => {
	return (
		<div className={cls.pageWrapper}>
			<Header />
			<Aside />
			<Main />
			<Footer />
		</div>
	)
}
export default App;