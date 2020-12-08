import React, {Component} from 'react';
import {CommentService} from '../services/CommentService';
import {Route, Switch} from 'react-router-dom';
import './AllComments.css';
import Comment from '../comment/Comment';

class AllComments extends Component {

    state = {comments: []};

    commentService = new CommentService();

    async componentDidMount() {
        let comments = await this.commentService.getAllComments();
        this.setState({comments});
    }

    render() {
        let {comments} = this.state;

        return (
            <div>
                {comments.map(value => <Comment key={value.id} item={value}/>)}
                <div className={'nest'}>
                    <Switch>
                        <Route path={'/comments/:id'} render={(props) => {

                        }}/>
                    </Switch>

                </div>
            </div>
        );
    }
}

export default AllComments;
