import React from 'react';
import './Search.css';

class Search extends React.Component {
	render() {
		return (
			<div style={{ background: '#eee' }}>
				<p>Search: {this.props.query}</p>
				<div className='search_wrap search_wrap_5'>
					<div className='search_box'>
						<input
							type='text'
							className='input'
							placeholder='search'
							value={this.props.query}
							onChange={this.props.handleSearch}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Search;
