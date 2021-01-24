import React from 'react';

class UpdateItem extends React.Component {

    state = {name: this.props.details.name}

    handleDescriptionChange = (e) => {
        this.setState({name:e.target.value})
    }

    handleDescriptionUpdate = () => {
        this.props.handleUpdateClick(this.props.details.sessionId, this.state.name)
    }



    render() {
        return (
            <div>
                <h2>{this.props.details.title}</h2>
                <textarea
                    rows="4" cols="50"
                    value={this.state.name}
                    onChange={this.handleDescriptionChange}
                />
                <button onClick={this.handleDescriptionUpdate}>Update</button>
            </div>
        );
    }
}

export default UpdateItem;