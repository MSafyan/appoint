import React from 'react';

class Author extends React.Component {

    state = {display: false, data: []}

    handleAuthorClick = () => {
        this.setState({display: !this.state.display})
    }

    render() {

        let films = ""
        if (this.state.display) {
            films = "show"
        }

        return (
            <div>
                <h2 onClick={this.handleAuthorClick}>{this.props.details.first_name} {this.props.details.last_name}</h2>
                {films}
            </div>
        );
    }
}

export default Author;