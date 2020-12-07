import React, {Component} from 'react';
import PostComponent from '../post/PostComponent';
import './AllPosts.css';
import {PostService} from '../../services/PostService';

class AllPostsComponents extends Component {

    postService = new PostService();

    state = {posts: [], classState: 'three', flag: false, chosenPost: null};


    componentDidMount() {
        this.postService.getAllPosts().then(value => this.setState({posts: value}))
    };

    changeColor = () => {
        if (this.flag) {
            this.setState({classState: 'three'})
        } else {
            this.setState({classState: 'four'})
        }
        this.flag = !this.flag
    };

    selectPost = (id) => {
        this.postService.getPostById().then(value => this.setState({chosenPost: value}))
    };


    render() {

        let {posts, classState, chosenPost} = this.state;

        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}>All Posts Page</h1>
                {
                    posts.map(value => (<PostComponent
                        item={value}
                        key={value.id}
                        selectPost = {this.selectPost}
                    />))
                }
                <hr/>
                {chosenPost && <PostComponent item={chosenPost}/>}
            </div>
        );
    }
}

export default AllPostsComponents;
