import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { DefaultStyle } from '../utils/DefaultStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({ title, onPress }) => {
  return (
    <View style={styles.headerContainer}>
      {/* Left-aligned icon */}
      <TouchableOpacity onPress={onPress}>
        <Icon name={'arrow-back'} size={24} color="#000" />
      </TouchableOpacity>

      {/* Center-aligned title */}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

// Styles for alignment
const styles = {
  headerContainer: {
    flexDirection: 'row', // Horizontal layout
    alignItems: 'center', // Vertically center icon and title
    justifyContent: 'center', // Center the title
    paddingHorizontal: 10,  // Horizontal padding
    paddingVertical: 15,    // Vertical padding
    backgroundColor: '#FFF',
    ...DefaultStyle.cardShadow,
    marginBottom: 10,
  },
  title: {
    flex: 1, // Takes the remaining space after the icon
    textAlign: 'center', // Ensure the title is centered
    fontSize: 18,
    fontWeight: 'bold',
  },
};

export default Header;
