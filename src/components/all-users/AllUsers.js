import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import UserService from '../../services/UserService';
import User from '../user/User';
import FullUser from '../full-user/FullUser';


class AllUsers extends Component {

    userService = new UserService();

    state = {users: []};

    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users});
    }

    render() {

        let {users} = this.state;
        let {match: {url}} = this.props;

        return (
            <div>
                {
                    users.map(value => <User item={value} key={value.id}/>)
                }
                <hr/>
                    <Switch>
                        <Route path={url + '/:id'} render={(props) => {
                            const {match: {params: {id}}} = props;
                            return <FullUser {...props} key={id}/>;
                        }}/>
                    </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllUsers);
