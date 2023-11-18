// UserAuth.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, selectUser } from '../features/authSlice';
import './UserAuth.css';

const UserAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [username, setUsername] = useState('');

  const handleSignIn = () => {
    // Implement your authentication logic here
    dispatch(setUser(username));
  };

  return (
    <div className="user-auth">
      {user ? (
        <div className="welcome-message">Welcome, {user}! {/* Add logout functionality if needed */}</div>
      ) : (
        <div>
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleSignIn}>Sign In</button>
          {/* Add sign-up functionality if needed */}
        </div>
      )}
    </div>
  );
};

export default UserAuth;
