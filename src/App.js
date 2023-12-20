import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/Footer/Footer";
const App = () => {
	return (
		<div className="page-wrapper">
			<Header />
			<Aside />
			<main className="main">
				{/*<Main />*/}
				<Dialogs />
			</main>
			<Footer />
		</div>
	)
}
export default App;