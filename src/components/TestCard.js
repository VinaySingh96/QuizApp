import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {FONT_SIZES} from '../constants/Font';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {buttonColor} from '../constants/Colour';
import {DefaultStyle} from '../utils/DefaultStyle';

const TestCard = ({
  title,
  description,
  imageUrl,
  totalMarks,
  totalQuestions,
  duration,
  date,
  icon,
  onPress,
}) => {
  const formatTestData = () => {
    return `${totalQuestions} Questions | ${totalMarks} Marks | ${duration} Minutes`;
  };
  const formatDate = () => {
    const options = {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(
      new Date(date),
    );

    return formattedDate.replace(',', ' •');
  };
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View>
        <View style={styles.cardHeader}>
          {/* <Image source={{ uri: imageUrl }} style={styles.image} /> */}
          <Icon name={icon} size={FONT_SIZES.LARGE} />
          <Text style={styles.title}>{title}</Text>
        </View>
        {/* <Text style={styles.description}>{description}</Text> */}
        <View style={styles.cardFooter}>
          <View style={styles.footerItem}>
            <Icon
              name={'assignment'}
              size={FONT_SIZES.MEDIUM}
              style={styles.footerValue}
            />
            <Text style={styles.footerValue}>{formatTestData()}</Text>
          </View>

          <View style={styles.footerItem}>
            <Icon
              name={'calendar-month'}
              size={FONT_SIZES.MEDIUM}
              style={styles.footerValue}
            />
            <Text style={styles.footerValue}>{formatDate()}</Text>
          </View>
        </View>
      </View>
      <View style={styles.startButton}>
        <View style={DefaultStyle.itemsCenter}>
          <Icon
            name={'arrow-forward'}
            size={FONT_SIZES.LARGE}
            style={styles.startIcon}
          />
          <Text style={FONT_SIZES.LARGE}>Start</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  startIcon: {
    backgroundColor: buttonColor.primary,
    borderRadius: FONT_SIZES.EXTRA_LARGE,
    padding: 6,
    color: '#FFF',
    fontWeight: 'bold',
  },
  startButton: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 12,
    marginRight: 10,
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 3},
    elevation: 3,
    flexDirection: 'row',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    gap: 8,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
    resizeMode: 'contain',
  },
  title: {
    fontSize: FONT_SIZES.MEDIUM,
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
    gap: 4,
  },
  footerItem: {
    flexDirection: 'row',
    marginBottom: 5,
    alignItems: 'center',
    gap: 10,
  },
  footerLabel: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#333',
  },
  footerValue: {
    fontSize: FONT_SIZES.EXTRA_SMALL,
    // fontSize: 14,
    color: '#555',
  },
});

export default TestCard;
