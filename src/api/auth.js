import apiClient from './index';

export const login = async (credentials) => {
  try {
    const response = await apiClient.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    console.error('Login API Error:', error);
    throw error;
  }
};

export const register = async (userDetails) => {
  try {
    const response = await apiClient.post('/auth/register', userDetails);
    return response.data;
  } catch (error) {
    console.error('Register API Error:', error);
    throw error;
  }
};
