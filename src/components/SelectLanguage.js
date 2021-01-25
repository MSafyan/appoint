import React from 'react';
import './SelectLanguage.css';

class SelectLanguage extends React.Component {
	state = { languages: [] };

	componentDidMount() {
		const url = '';
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				this.setState({ languages: data.data });
			})
			.catch((err) => {
				console.log('something went wrong ', err);
			});
	}

	render() {
		return (
			<label>
				Langauge
				<select
					className='select'
					value={this.props.language}
					onChange={this.props.handleLanguageSelect}
				>
					<option className='select-box ' value=''>
						Eng
					</option>
					{this.state.languages.map((l, i) => (
						<option className='select-box' key={i} value={l.name}>
							{l.name}
						</option>
					))}
				</select>
			</label>
		);
	}
}

export default SelectLanguage;
