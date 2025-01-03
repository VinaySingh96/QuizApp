import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Animated } from 'react-native';

const CustomInput = ({ placeholder, value, onChangeText, disabled, required }) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedLabel = new Animated.Value(value ? 1 : 0);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedLabel, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    if (!value) {
      setIsFocused(false);
      Animated.timing(animatedLabel, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  const labelStyle = {
    position: 'absolute',
    left: 4,
    top: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [18, 0], // Start at input box center, move to the top
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12], // Shrink the label size
    }),
    color: isFocused || value ? '#6200EE' : '#aaa',
  };

  return (
    <View style={styles.container}>
      <Animated.Text style={labelStyle}>{placeholder} {required ? '*' : ''}</Animated.Text>
      <TextInput
        style={[styles.input, disabled && styles.disabledInput]}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        editable={!disabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    position: 'relative',
    paddingTop: 16,
  },
  input: {
    height: 40,
    fontSize: 16,
    color: '#000',
  },
  disabledInput: {
    backgroundColor: '#f5f5f5',
    color: '#999',
  },
});

export default CustomInput;
