import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Use react-native-vector-icons
import { buttonColor } from '../constants/Colour';
import { FONT_SIZES } from '../constants/Font';
import { DefaultStyle } from '../utils/DefaultStyle';

const ButtonComponent = ({ label, iconLeft, iconRight, onPress, disabled }) => {
  return (
    <Pressable
      onPress={!disabled ? onPress : null} // Disable onPress if the button is disabled
      disabled={disabled} // Disable the Pressable component
      style={({ pressed }) => [
        styles.button,
        { 
          opacity: disabled ? 0.5 : pressed ? 0.7 : 1, // Adjust opacity for disabled and pressed states
          backgroundColor: disabled ? buttonColor.disabled : buttonColor.primary, // Use disabled color
        },
      ]}
    >
      <View style={styles.contentContainer}>
        {iconLeft && <Icon name={iconLeft} size={24} color="white" style={styles.icon} />}
        <Text style={[styles.label, { color: disabled ? buttonColor.disabledText : 'white' }]}>
          {label}
        </Text>
        {iconRight && <Icon name={iconRight} size={24} color="white" style={styles.icon} />}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...DefaultStyle.p2,
    borderRadius: 8,
    marginTop: 12
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    textAlign: 'center',
  },
  label: {
    fontSize: FONT_SIZES.BUTTON,
    fontWeight: 'bold',
  },
});

export default ButtonComponent;
