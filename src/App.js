import React from 'react';
import cls from './App.module.css';
import Header from './components/Header.jsx';
import Aside from "./components/Aside";
import Main from "./components/Main";
import Footer from "./components/Footer";
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