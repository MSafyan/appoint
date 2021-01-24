import React from 'react';

class SelectRating extends React.Component {
    state = {ratings:[]}

    componentDidMount() {
        const url = ""
        fetch(url)
            .then( (response) => response.json() )
            .then( (data) => {
                this.setState({ratings:data.data})
            })
            .catch ((err) => {
                    console.log("something went wrong ", err)
                }
            );
    }

    render() {
        return (
            <label>Rating
                <select value={this.props.rating} onChange={this.props.handleSelect}>
                    <option value="">Select</option>
                    {this.state.ratings.map( (r,i) => (<option key={i} value={r.rating}>{r.rating}</option>) )}
                    }
                </select>
            </label>
        )
    }
}

export default SelectRating;

