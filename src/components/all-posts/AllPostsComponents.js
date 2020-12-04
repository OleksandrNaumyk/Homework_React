import React, {Component} from 'react';
import PostComponent from '../post/PostComponent';
import './AllPosts.css';

class AllPostsComponents extends Component {

    state = {posts: [], classState: 'three', flag: false, chosenPost: null};

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postFromApi => {
                this.setState({posts: postFromApi})
            });
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
        let chosenPost = this.state.posts.find(value => value.id === id)
        this.setState({chosenPost})
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
