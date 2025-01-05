import apiClient from './index';

export const fetchUserProfile = async (token) => {
  try {
    // const response = await apiClient.get('/user', {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // });
    // return response.data;
    return {
      user: {
        name: 'Aakash',
        phoneNumber: '9793993020',
        exam: 'react_ui',
        email: 'aakash@sky.com'
      },
      success: true
    };
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
