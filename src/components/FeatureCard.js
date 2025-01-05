import { Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import {textColor} from '../constants/Colour';
import { DefaultStyle } from '../utils/DefaultStyle';

const FeatureCard = ({feature, image, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.container,
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}>
      {/* TODO: update with url */}
      <Image source={image} style={styles.featureImage} />
      <Text style={styles.text}>{feature}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: 100,
    borderRadius: 8,
    borderColor: textColor.gray,
    padding: 10,
    backgroundColor: '#fff', // Add a background color for better shadow visibility
    alignItems: 'flex-start',
    justifyContent: 'center',
    ...DefaultStyle.cardShadow,
  },
  featureImage: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  text: {
    fontWeight: '500',
    fontSize: 11,
    marginLeft: 5,
  },
});

export default FeatureCard;
