//// api.js
export const fetchPosts = () => {
    //// Dummy API call, replace with your actual API endpoint
    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((data) => data.slice(0, 10));
      //// Limiting to 10 posts for simplicity
  };
  