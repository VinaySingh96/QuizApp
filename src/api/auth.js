import apiClient from './index';

export const login = async phoneNumber => {
  try {
    const response = await apiClient.post('/auth/login', phoneNumber);
    return response.data;
  } catch (error) {
    console.error('Login API Error:', error);
    throw error;
  }
};

export const register = async userDetails => {
  try {
    const response = await apiClient.post('/auth/register', userDetails);
    return response.data;
  } catch (error) {
    console.error('Register API Error:', error);
    throw error;
  }
};

export const verifyOtp = async (phoneNumber, otp) => {
  try {
    const response = await apiClient.post('/auth/verify-otp', {phoneNumber, otp});
    return response.data;
  } catch (error) {
    console.error('Verify OTP Error:', error);
    throw error;
  }
};
