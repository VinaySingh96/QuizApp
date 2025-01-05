import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TestResultCard = ({ title, description, imageUrl, totalMarks, marksObtained, duration, passingMarks, date, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.cardFooter}>
        <View style={styles.footerItem}>
          <Text style={styles.footerLabel}>Marks: </Text>
          <Text style={styles.footerValue}>
            {marksObtained} / {totalMarks}
          </Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.footerLabel}>Duration: </Text>
          <Text style={styles.footerValue}>{duration}</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.footerLabel}>Passing Marks: </Text>
          <Text style={styles.footerValue}>{passingMarks}</Text>
        </View>
        <View style={styles.footerItem}>
          <Text style={styles.footerLabel}>Date: </Text>
          <Text style={styles.footerValue}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  cardFooter: {
    marginTop: 10,
  },
  footerItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  footerLabel: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  footerValue: {
    fontSize: 14,
    color: '#555',
  },
});

export default TestResultCard;
