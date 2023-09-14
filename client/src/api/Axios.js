
import axios from 'axios';

// Create an Axios instance with a default base URL
const instance = axios.create({
  baseURL: 'http://localhost:4040/api/v1', // Replace with your API URL
  
});

export default instance;
