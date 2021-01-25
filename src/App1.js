import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sessions from './components/Sessions.js';
import Authors from './components/Authors.js';
import Home from './components/Home.js';
import Admin from './components/Admin.js';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path='/Home'>
						<Home />
					</Route>
					<Route path='/sessions'>
						<Sessions />
					</Route>
					<Route path='/authors'>
						<Authors />
					</Route>
					<Route path='/admin'>
						<Admin />
					</Route>
					<Route path='*'>404 Not Found</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
