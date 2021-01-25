import React from 'react';
import Search from './Search.js';
import SelectLanguage from './SelectLanguage.js';
import SelectRating from './SelectRating.js';
import Session from './Session.js';
import './Sessions.css';
class Sessions extends React.Component {
	componentDidMount() {
		const url = 'http://localhost/Assessment/api/sessions';

		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.data);
				this.setState({ data: data.data });
			})
			.catch((err) => {
				console.log('something went wrong ', err);
			});
	}

	constructor(props) {
		super(props);
		this.state = {
			page: 1,
			pageSize: 9,
			query: '',
			rating: '',
			language: '',
			data: [],
		};

		this.handleSearch = this.handleSearch.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.handleLanguageSelect = this.handleLanguageSelect.bind(this);
	}

	handleMoreClick = () => {
		this.setState({ page: this.state.page + 1 });
	};

	handleNextClick = () => {
		this.setState({ page: this.state.page + 1 });
	};

	handlePreviousClick = () => {
		this.setState({ page: this.state.page - 1 });
	};

	handleSearch = (e) => {
		this.setState({ Page: 1, query: e.target.value });
	};

	searchString = (s) => {
		// return s.toLowerCase().includes(this.state.query.toLowerCase())
	};

	searchDetails = (details) => {
		return (
			this.searchString(details.title) || this.searchString(details.description)
		);
	};

	handleSelect = (e) => {
		this.setState({ Page: 1, rating: e.target.value });
	};

	handleLanguageSelect = (e) => {
		this.setState({ Page: 1, language: e.target.value });
	};

	selectDetails = (details) => {
		return this.state.rating === details.rating || this.state.rating === '';
	};

	selectLanguageDetails = (details) => {
		return (
			this.state.language === details.language || this.state.language === ''
		);
	};

	render() {
		let filteredData = this.state.data
			.filter(this.selectLanguageDetails)
			.filter(this.selectDetails)
			.filter(this.searchDetails);
		let noOfPages = Math.ceil(filteredData.length / this.state.pageSize);
		if (noOfPages === 0) {
			noOfPages = 1;
		}
		let disabledPrevious = this.state.page <= 1;
		let disabledNext = this.state.page >= noOfPages;

		return (
			<div className='bcolor'>
				<div>
					<h1>Sessions</h1>
					<div className='sessionSelect'>
						<SelectRating
							rating={this.state.rating}
							handleSelect={this.handleSelect}
						/>
						<SelectLanguage
							language={this.state.language}
							handleLanguageSelect={this.handleLanguageSelect}
						/>
					</div>
				</div>
				<Search query={this.state.query} handleSearch={this.handleSearch} />
				{filteredData
					.slice(
						this.state.pageSize * this.state.page - this.state.pageSize,
						this.state.pageSize * this.state.page
					)
					.map((details, i) => (
						<Session key={i} details={details} />
					))}
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<button
						className='card-btn'
						onClick={this.handlePreviousClick}
						disabled={disabledPrevious}
					>
						Previous
					</button>
					Page {this.state.page} of {noOfPages}
					<button
						className='card-btn'
						onClick={this.handleNextClick}
						disabled={disabledNext}
					>
						Next
					</button>
				</div>
			</div>
		);
	}
}
export default Sessions;
