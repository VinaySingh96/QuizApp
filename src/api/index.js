import axios from 'axios';
import { getToken } from '../helper/Storage';

const apiClient = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 10000, // Timeout in milliseconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add an interceptor to attach tokens (if needed)
apiClient.interceptors.request.use(
  async (config) => {
    // Add token if available
    const token = await getToken(); // Replace with your token retrieval logic
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

module.export = { apiClient };
