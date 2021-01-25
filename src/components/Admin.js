import React from 'react';
import Login from './Login.js';
import Update from './Update.js';

class Admin extends React.Component {
	constructor(props) {
		super(props);
		this.state = { authenticated: false, email: '', password: '' };

		this.handleEmail = this.handleEmail.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
	}

	state = { authenticated: false, email: '', password: '' };

	postData = (url, myJSON, callback) => {
		fetch(url, {
			method: 'POST',
			headers: new Headers(),
			body: JSON.stringify(myJSON),
		})
			.then((response) => response.json())
			.then((data) => {
				callback(data);
			})
			.catch((err) => {
				console.log('something went wrong ', err);
			});
	};

	loginCallback = (data) => {
		console.log(data);
		if (data.status === 200) {
			this.setState({ authenticated: true, token: data.token });
		}
	};

	updateCallback = (data) => {
		console.log(data);
		if (data.status !== 200) {
			this.setState({ authenticated: false });
			localStorage.removeItem('myToken');
		}
	};

	handleLoginClick = () => {
		const url = 'http:/localhost/Assessment/api/login';
		let myJSON = { email: this.state.email, password: this.state.password };
		this.postData(url, myJSON, this.loginCallback);
	};

	handleLogoutClick = () => {
		this.setState({ authenticated: false });
	};

	handleUpdateClick = (sessionId, name) => {
		const url = 'http:/localhost/Assessment/api/update';
		if (localStorage.getItem('myToken')) {
			let myToken = localStorage.getItem('myToken');
			let myJSON = {
				token: myToken,
				sessionId: sessionId,
				name: name,
			};
			this.postData(url, myJSON, this.updateCallback);
		} else {
			this.setState({ authenticated: false });
		}
	};

	handlePassword = (e) => {
		this.setState({ password: e.target.value });
	};
	handleEmail = (e) => {
		this.setState({ email: e.target.value });
	};

	render() {
		let page = (
			<Login
				handleLoginClick={this.handleLoginClick}
				email={this.state.email}
				password={this.props.password}
				handleEmail={this.handleEmail}
				handlePassword={this.handlePassword}
			/>
		);
		if (this.state.authenticated) {
			page = (
				<div>
					<button onClick={this.handleLogoutClick}>Log out</button>
					<Update handleUpdateClick={this.handleUpdateClick} />
				</div>
			);
		}
		return (
			<div style={{ background: '#eee', height: '100vh' }}>
				<h1>Admin</h1>
				{page}
			</div>
		);
	}
}

export default Admin;
