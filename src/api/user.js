import apiClient from './index';

export const fetchUserProfile = async (token) => {
  try {
    const response = await apiClient.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Fetch User Profile Error:', error);
    return null;
  }
};

export const updateUserProfile = async (data) => {
  try {
    const response = await apiClient.put('/user/profile', data);
    return response.data;
  } catch (error) {
    console.error('Update User Profile Error:', error);
    return null;
  }
};
