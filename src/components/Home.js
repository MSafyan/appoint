import React from 'react';
import Search from './Search';
import Session from './Session.js';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: 1,
			pageSize: 9,
			query: '',
			data: [],
		};

		this.handleSearch = this.handleSearch.bind(this);
	}

	handleSearch = (e) => {
		this.setState({ page: 1, query: e.target.value });
		this.searchDetails(e.target.value);
	};

	componentDidMount() {
		fetch('http://localhost:5000/Assessment')
			.then((data) => {
				return data.json();
			})
			.then((res) => {
				console.log(res);
				this.setState({ data: res });
			})
			.catch((err) => {
				console.log(err);
			});
	}

	searchDetails = (query) => {
		const url = 'http:/localhost/Assessment/api/sessions?search=' + query;
		const durl = 'http:/localhost:5000/Assessment';

		fetch(url)
			.then((data) => {
				return data.json();
			})
			.then((res) => {
				console.log({ res: res });

				this.setState({ data: res });
			})
			.catch((err) => {
				console.log('something went wrong ', err);
			});
	};

	handlePreviousClick = () => {
		this.setState({ page: this.state.page - 1 });
	};

	handleNextClick = () => {
		this.setState({ page: this.state.page + 1 });
	};

	render() {
		let filteredData = this.state.data;

		let noOfPages = Math.ceil(filteredData.length / this.state.pageSize);
		if (noOfPages === 0) {
			noOfPages = 1;
		}
		let disabledPrevious = this.state.page <= 1;
		let disabledNext = this.state.page >= noOfPages;

		return (
			<div style={{ background: '#cbd0d6' }}>
				<Search query={this.state.query} handleSearch={this.handleSearch} />
				<div className='container'>
					<div className='grid'>
						{filteredData
							.slice(
								this.state.pageSize * this.state.page - this.state.pageSize,
								this.state.pageSize * this.state.page
							)
							.map((details, i) => (
								<Session className='grid-item' key={i} details={details} />
							))}
					</div>
				</div>
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

export default Home;
