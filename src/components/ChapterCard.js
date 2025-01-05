import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import {DefaultStyle} from '../utils/DefaultStyle';

// Card Component
const ChapterCard = ({title, description, imageUrl, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.cardContainer,
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}>
      {/* Chapter Image */}
      <Image source={{uri: imageUrl}} style={styles.cardImage} />

      {/* Card Details */}
      <View style={styles.cardDetails}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardDescription}>{description}</Text>
      </View>
    </Pressable>
  );
};

// Styles for the Card
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row', // Horizontal layout
    backgroundColor: '#fff',
    borderRadius: 10,
    ...DefaultStyle.cardShadow,
    marginBottom: 15,
    marginHorizontal: 10,
    overflow: 'hidden',
    padding: 10,
  },
  cardImage: {
    width: 100, // Adjust as per design
    height: 100, // Adjust as per design
    borderRadius: 8,
    marginRight: 10,
  },
  cardDetails: {
    justifyContent: 'center',
    flex: 1, // Take up remaining space
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default ChapterCard;
