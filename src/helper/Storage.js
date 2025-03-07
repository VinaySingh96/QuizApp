import MMKVStorage from 'react-native-mmkv-storage';
import { defaultPreference, USER_PREFERENCE } from '../constants/UserPreferences';

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

let userPreferences;

export const saveUserPreferences = async ({ key, value }) => {
  let currentPreference = await getUserPreferences();
  if (!currentPreference) currentPreference = defaultPreference;
  currentPreference[key] = value;

  userPreferences = currentPreference;

  await MMKV.setStringAsync(USER_PREFERENCE, JSON.stringify(currentPreference));
};

export const getUserPreferences = async () => {
  const stringData = await MMKV.getStringAsync(USER_PREFERENCE);
  if (!stringData) userPreferences = defaultPreference;

  userPreferences = JSON.parse(stringData);
};

export const getLoadedpreference = (key) => {
  return userPreferences[key];
}
