import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Admin from './pages/Admin';
import HomePage from './pages/HomePage';
import Authors from './pages/Authors';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/' component={HomePage}></Route>
					<Route exact path='/authors' component={Authors}></Route>
					<Route exact path='/admin' component={Admin}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
