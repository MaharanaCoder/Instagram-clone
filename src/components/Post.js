// Post.js
import React, { useState } from 'react';
import Comment from './Comment';
import './Post.css';

const Post = ({ post }) => {
  const [commentText, setCommentText] = useState('');
  const [comments, setComments] = useState([]);

  const handleAddComment = () => {
    // Implement your logic to add comments
    const newComment = {
      id: comments.length + 1,
      text: commentText,
      user: 'Current User', // Replace with actual user data
    };

    setComments([...comments, newComment]);
    setCommentText('');
  };

  return (
    <div className="post-container">
      <img className="post-image" src={post.thumbnailUrl} alt="Post" />
      <p>{post.user}</p>
      <p>{post.caption}</p>

      <div className="post-comments">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>

      <div>
        <input
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="comment-input"
        />
        <button onClick={handleAddComment}>Comment</button>
      </div>
    </div>
  );
};

export default Post;
