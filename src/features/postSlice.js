// postSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPosts } from '../api/api';

export const fetchPostsAsync = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetchPosts();
  return response;
});

export const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      });
  },
});

export const selectAllPosts = (state) => state.posts.posts;
export const selectPostStatus = (state) => state.posts.status;
export default postSlice.reducer;
