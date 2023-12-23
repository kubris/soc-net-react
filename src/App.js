import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
const App = (props) => {
	return (
		<BrowserRouter>
			<div className="page-wrapper">
				<Header />
				<Aside />
				<main className="main">
					<Route path="/profile"
						   render={ () => <Profile state={props.state.profilePage} /> } />
					<Route path="/dialogs"
						   render={ () => <Dialogs state={props.state.messagesPage} /> } />
					<Route path="/news" 	component={News} />
					<Route path="/music" 	component={Music}/>
					<Route path="/settings" component={Settings}/>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	)
}
export default App;