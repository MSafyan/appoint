import React from 'react';
import UpdateItem from './UpdateItem.js';


class Update extends React.Component {
    state = {name: this.props.details.name}

    componentDidMount() {
        const url = "http:/localhost/Assessment/api/sessions"
        fetch(url)
            .then( (response) => response.json() )
            .then( (data) => {
                this.setState({data:data.data})
            })
            .catch ((err) => {
                    console.log("something went wrong ", err)
                }
            );
    }

    render() {
        return (
            <div>
                {this.state.data.map((details,i) => (<UpdateItem key={i} details={details}
                                                                 handleUpdateClick={this.props.handleUpdateClick}/>))}
                <button onClick={this.props.handleUpdateClick}>Update</button>
            </div>
        );
    }
}

export default Update;