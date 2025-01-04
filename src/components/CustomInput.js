import React, {useState} from 'react';
import {Text, TextInput, View, StyleSheet, Animated} from 'react-native';
import {buttonColor, textColor} from '../constants/Colour';

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  disabled,
  required,
  error = null,
}) => {
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
    color: isFocused || value ? textColor.placeholder : '#aaa',
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Animated.Text style={labelStyle}>
          {placeholder} {required ? '*' : ''}
        </Animated.Text>
        <TextInput
          style={[
            styles.input,
            disabled && styles.disabledInput,
            error && styles.errorInput, // Apply error style if error exists
          ]}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          editable={!disabled}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    marginVertical: 15,
  },
  inputContainer: {
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
  errorInput: {
    borderBottomColor: 'red', // Highlight border in red when there's an error
  },
  errorText: {
    color: textColor.danger,
    fontSize: 12,
    marginTop: 4,
  },
});

export default CustomInput;
