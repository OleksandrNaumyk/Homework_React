import React, {Component} from 'react';
import {PostService} from '../services/PostService';
import {Route, Switch} from 'react-router-dom';
import Post from '../posts/Post';
import './AllPosts.css';

class AllPosts extends Component {

    state = {posts: []};

    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.getAllPosts();
        this.setState({posts});
    }

    render() {
        let {posts} = this.state;

        return (
            <div>
                {posts.map(value => <Post key={value.id} item={value}/>)}
                <div className={'nest'}>
                    <Switch>
                        <Route path={'/posts/:id'} render={(props) => {

                        }}/>
                    </Switch>

                </div>
            </div>
        );
    }
}

export default AllPosts;
