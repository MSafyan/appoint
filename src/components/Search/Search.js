import React from 'react';
import './Search.css';

const Search = () => {
	return (
		<div className='wrapper'>
			<div className='container'>
				<div className='search_wrap search_wrap_5'>
					<div className='search_box'>
						<input type='text' className='input' placeholder='search...' />
						<div className='btn'>
							<button>Search</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Search;
