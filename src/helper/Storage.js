import MMKVStorage from 'react-native-mmkv-storage';

// Initialize MMKV storage
const MMKV = new MMKVStorage.Loader().initialize();

/**
 * Save a token to MMKV storage
 * @param {string} token - The token to be saved
 */
export const saveToken = async (token) => {
  try {
    await MMKV.setStringAsync('userToken', token);
    console.log('Token saved successfully.');
  } catch (error) {
    console.error('Error saving token:', error);
  }
};

/**
 * Retrieve the token from MMKV storage
 * @returns {Promise<string | null>} - The retrieved token, or null if not found
 */
export const getToken = async () => {
  try {
    const token = await MMKV.getStringAsync('userToken');
    if (token) {
      console.log('Token retrieved successfully.');
      return token;
    }
    console.log('No token found.');
    return null;
  } catch (error) {
    console.error('Error retrieving token:', error);
    return null;
  }
};
