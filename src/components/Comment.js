import React, { Component } from 'react';

class Comment extends Component {

  render() {
    return (
      <div className="comment">
        <img src={this.props.data.author.avatar} alt="avatar"/>
        <div className="comment-content">
          <span>{this.props.data.author.name}</span> {this.props.data.content}
        </div>
      </div>
    );
  }

}

export default Comment;