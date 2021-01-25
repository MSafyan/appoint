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
						<p className='card-header'> {this.props.details.f}</p>
						<p className='card-text'>
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
			<div className='grid-item'>
				<div className='card'>
					<div className='card-content'>
						<h2 className='card-header' onClick={this.handleSessionClick}>
							{' '}
							{this.props.details.f}
						</h2>

						{info}
					</div>
				</div>
			</div>
		);
	}
}

export default Session;

{
	/* <div class='grid'>
	<div class='grid-item'>
		<div class='card'>
			<img class='card-img' src='./img/rome.jpg' alt='Rome' />
			<div class='card-content'>
				<h1 class='card-header'>Rome</h1>
				<p class='card-text'>
					Rome is known for its stunning <strong> architecture</strong>, with
					the Colleseum, Pantheon, and Trevi Fountain as the main attractions.
				</p>
				<button class='card-btn'>
					Visit <span>&rarr;</span>
				</button>
			</div>
		</div>
	</div>
</div>; */
}
