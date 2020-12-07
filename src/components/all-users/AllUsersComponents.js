import React, {Component} from 'react';
import UserComponent from '../user/UserComponent';
import './AllUsers.css';
import {UserService} from '../../services/UserService';

class AllUsersComponents extends Component {

    userService = new UserService();

    state = {users: [], classState: 'one', chosenUser: null};

    flag = false;

    OnUserChose = (id) => {
        this.userService.getUserById().then(value => this.setState({chosenUser: value}))
    }

    componentDidMount() {
        this.userService.getAllUsers().then(value => this.setState({users: value}))
    }

    changeColor = () => {
        if (this.flag) {
            this.setState({classState: 'one'})
        } else {
            this.setState({classState: 'two'})
        }
        this.flag = !this.flag;
    }

    selectThisUser = (id) => {
        let chosenUser = this.state.users.find(value => value.id === id)
        this.setState({chosenUser})
    };

    render() {
        let {users, classState, chosenUser} = this.state;
        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}>All Users Page</h1>
                {
                users.map(value => (<UserComponent
                    item={value}
                    key={value.id}
                    selectThisUser = {this.selectThisUser}
                />))
                }
                <hr/>
                {
                    chosenUser && (<UserComponent item={chosenUser}/>)
                }
            </div>
        );
    }
}

export default AllUsersComponents;
