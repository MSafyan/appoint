import React from 'react';

class Session extends React.Component {
	state = { display: false, displayFurther: false };

	handleSessionClick = () => {
		this.setState({ display: !this.state.display });
	};
	handleDetailClick = () => {
		this.setState({ displayFurther: !this.state.displayFurther });
	};

	render() {
		let info = 'http://localhost/Assessment/api/sessions';
		let furtherInfo = '';

		if (this.state.displayFurther) {
			furtherInfo = (
				<p>
					Language: {this.props.details.language} Rating:{' '}
					{this.props.details.rating}
				</p>
			);
		}

		if (this.state.display) {
			info = (
				<div>
					<p onClick={this.handleDetailClick}>
						{this.props.details.description}
						<p> {this.props.details.f}</p>
						<p>
							{' '}
							{this.props.details.authors.map((val, i) => (
								<snap key={i}>{val}</snap>
							))}
						</p>
						<p> {this.props.details.f}</p>
					</p>
					{furtherInfo}
				</div>
			);
		}

		return (
			<div>
				<h2 onClick={this.handleSessionClick}> {this.props.details.f}</h2>

				{info}
			</div>
		);
	}
}

export default Session;
