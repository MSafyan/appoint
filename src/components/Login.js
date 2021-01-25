import React from 'react';
import './Login.css';

class Login extends React.Component {
	render() {
		return (
			<div style={{ background: '#eee' }}>
				<form className='form'>
					<div className='form_group'>
						<input
							className='form__input'
							type='text'
							placeholder='email'
							value={this.props.email}
							onChange={this.props.handleEmail}
						/>
					</div>
					<div className='form_group'>
						<input
							className='form__input'
							type='password'
							placeholder='password'
							value={this.props.password}
							onChange={this.props.handlePassword}
						/>
					</div>
					<button className='btn' onClick={this.props.handleLoginClick}>
						Log in
					</button>
				</form>
			</div>
		);
	}
}

export default Login;
