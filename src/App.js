import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import AllUsers from "./components/all-users/AllUsers";

class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <ul>
                    <li>
                        <Link to={'/users'}>To All Users</Link>
                    </li>
                </ul>
                <hr/>
                    <Switch>
                        <Route path={'/users'} render={() => <AllUsers/>}/>
                    </Switch>
                <hr/>
            </div>
            </Router>
        );
    }
}

export default App;
