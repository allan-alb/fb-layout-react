import React, { Component } from 'react';

class NewComment extends Component {

  render() {

    return (
      <div className="newcomment">
        <img src="https://image.freepik.com/free-vector/man-avatar-profile-round-icon_24640-14044.jpg" alt=""/>
        <textarea name="new-comment" id="new-comment" cols="80" rows="20" placeholder="Escreva um comentário... "></textarea>
      </div>
    )
  }
}

export default NewComment;