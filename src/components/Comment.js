// Comment.js
import React from 'react';
import './Comment.css';

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <p>
        <strong>{comment.user}:</strong> {comment.text}
      </p>
    </div>
  );
};

export default Comment;
