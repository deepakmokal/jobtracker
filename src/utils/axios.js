import axios from 'axios';

// Create an Axios instance with custom configuration
const api = axios.create({
  baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit', // Set the base URL for all requests
  timeout: 5000, // Set the timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json', // Set default content type for requests
    // Add any other default headers you may need
  },
});

export default api