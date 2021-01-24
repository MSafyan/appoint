import React from 'react';
import Sessions from "./Sessions";


class Authors extends React.Component {

    state = {display:false, data:[]}

    loadSessionsDetails = () => {
        const url = "http://localhost/Assessment/api/sessions?authorId=" + this.props.details.authorId
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

    handleAuthorClick = (e) => {
        this.setState({display:!this.state.display})
        this.loadSessionsDetails()
    }


    render() {

        let session = ""
        if (this.state.display) {
            session = this.state.data.map( (details, i) => (<Sessions key={i} details={details} />) )
        }

        return (
            <div>
                <h2 onClick={this.handleAuthorClick}>{this.props.details.authorId} {this.props.details.name}</h2>
                {session}
            </div>
        );
    }
}



export default Authors;