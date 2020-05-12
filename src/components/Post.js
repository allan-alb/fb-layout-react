import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {

  render() {
    return (
      <div className="post">
        <div className="post-info">
          <img src={this.props.data.author.avatar} alt="avatar"/>
          <div>
            <span className="username">{this.props.data.author.name}</span>
            <span className="postdate">{this.props.data.date}</span>
          </div>
        </div>
        <div className="content">
          <p>{this.props.data.content}</p>
        </div>
        <div className="separator" />
        {this.props.data.comments.map(comment => <Comment key={comment.id} data={comment} />)}
      </div>
    )
  }
}

export default Post;