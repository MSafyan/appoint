import React from 'react';
import Sessions from './components/Sessions.js'
import Authors from './components/Authors.js'
import Home from './components/Home.js'
import Admin from './components/Admin.js'
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.css';


class NarrowNav extends React.Component {
    state = {expanded: true}

    toggle = () => {
        this.setState({expanded: !this.state.expanded})
    }

render() {

        let nav = ""
    if (this.state.expanded) {
        nav = <div>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/sessions">Sessions</NavLink>
            </li>
            <li>
                <NavLink to="/authors">Authors</NavLink>
            </li>
            <li>
                <NavLink to="/admin">Admin</NavLink>
            </li>
        </div>

    }


    return (

        <div>
            <button onClick={this.toggle}>Menu</button>
            {nav}
        </div>

    )
}

}

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="WideNav">
                    <ul>
                        <li>
                            <NavLink activeClassName = "selected" to="/Home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName = "selected" to="/sessions">Sessions</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName = "selected" to="/authors">Authors</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName = "selected" to="/admin">Admin</NavLink>
                        </li>

                    </ul>
                </nav>
                <nav className="NarrowNav">
                    <ul>
                        <NarrowNav />
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/Home">
                        <Home/>
                    </Route>
                    <Route path="/sessions">
                        <Sessions />
                    </Route>
                    <Route path="/authors">
                        <Authors/>
                    </Route>
                    <Route path="/admin">
                        <Admin/>
                </Route>
                    <Route path="*">
                        404 Not Found
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;

