import React from 'react';


class SelectLanguage extends React.Component {

    state = {languages:[]}

    componentDidMount() {
        const url = ""
        fetch(url)
            .then( (response) => response.json() )
            .then( (data) => {
                this.setState({languages:data.data})
            })
            .catch ((err) => {
                    console.log("something went wrong ", err)
                }
            );
    }

    render() {
        return (
            <label>Langauge
                <select value={this.props.language} onChange={this.props.handleLanguageSelect}>
                    <option value="">Select</option>
                    {this.state.languages.map( (l,i) => (<option key={i} value={l.name}>{l.name}</option>) )}
                    }
                </select>
            </label>
        )
    }
}

export default SelectLanguage;