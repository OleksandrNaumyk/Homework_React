import React, {Component} from 'react';

class PostComponent extends Component {
    render() {

        let {item, selectPost} = this.props;

        return (
            <div>
                {item.id} - {item.title}
                <button onClick={() => selectPost(item.id)}>Chose Post</button>
            </div>
        );
    }
}

export default PostComponent;
