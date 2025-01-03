import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const scale = width / 375; // Assuming 375px is the base screen width (e.g., iPhone 11)

export const FONT_SIZES = {
  EXTRA_SMALL: Math.round(10 * scale),
  SMALL: Math.round(12 * scale),
  MEDIUM: Math.round(14 * scale),
  LARGE: Math.round(18 * scale),
  EXTRA_LARGE: Math.round(24 * scale),
  HEADING: Math.round(24 * scale),

  BUTTON: Math.round(16 * scale),
};