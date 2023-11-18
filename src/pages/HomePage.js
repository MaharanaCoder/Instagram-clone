// HomePage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostsAsync, selectAllPosts, selectPostStatus } from '../features/postSlice';
import PostList from '../components/PostList';
import UserAuth from '../components/UserAuth';
import './Home.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(selectPostStatus);

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPostsAsync());
    }
  }, [postStatus, dispatch]);

  return (
    <div className="container">
      <div className="header">
        <div className="logo-container">
          <img className="logo" src="./instagramlogo.png" alt="Logo" />
          <img className="logo-text" src="./instagramtext.png" alt="Logo" />

          {/* <span className="logo-text">INSTAGRAM</span> */}
        </div>
        <div className="user-auth-container">
          <UserAuth />
        </div>
      </div>
      <div className="post-list-container">
        {postStatus === 'loading' ? (
          <div>Loading...</div>
        ) : postStatus === 'succeeded' ? (
          <PostList posts={posts} />
        ) : (
          <div>Error loading posts</div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
