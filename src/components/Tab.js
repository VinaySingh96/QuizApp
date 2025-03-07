import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const Tab = ({ tabOptions, onPress, selectedTab }) => {
  return (
    <View style={styles.fontSizeContainer}>
      {tabOptions.map(option => (
        <TouchableOpacity
          key={option}
          style={[
            styles.tab,
            selectedTab === option && styles.selectedTab, // Highlight selected
          ]}
          onPress={() => onPress(option)}>
          <Text
            style={[
              styles.tabText,
              selectedTab === option && styles.selectedTabText,
            ]}>
            {option.charAt(0).toUpperCase() + option.slice(1)}{' '}
            {/* Capitalize */}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  fontSizeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#e0e0e0', // Default background
  },
  selectedTab: {
    backgroundColor: '#007AFF', // Highlight selected tab
  },
  tabText: {
    fontSize: 14,
    color: '#000', // Default text color
  },
  selectedTabText: {
    color: '#fff', // Text color for selected tab
    fontWeight: 'bold',
  },
});

export default Tab;
