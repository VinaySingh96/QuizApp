import {StyleSheet, Dimensions} from 'react-native';
import {textColor} from '../constants/Colour';
import {FONT_SIZES} from '../constants/Font';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export const DefaultStyle = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 2,
    // width: deviceWidth,
    backgroundColor: '#f5f5f5',
  },
  itemsCenter: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: textColor.textDark,
    backgroundColor: 'red',
    textAlign: 'center',
  },
  fontBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  smallText: {
    fontSize: FONT_SIZES.EXTRA_SMALL,
    color: textColor.subtext,
  },
  primaryHeading: {
    textAlign: 'center',
    fontSize: FONT_SIZES.HEADING,
    color: textColor.heading,
    fontWeight: '600',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  p1: {
    padding: 6,
  },
  p2: {
    padding: 12,
  },
  p3: {
    padding: 18,
  },

  welcomeImage: {
    width: deviceWidth,
    height: deviceWidth / 2,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  backgroundColor: {
    backgroundColor: 'lightGray',
  },

  lightBackground: {
    backgroundColor: '#FFFFFF',
  },

  cardContainer: {
    padding: 8,
    width: deviceWidth,
    backgroundColor: '#FFFFFF',
  },
  dashboardContainer: {
    backgroundColor: 'lightGray',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: 16,
  },

  cardShadow: {
    // shadowColor: '#000',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.2,
    // shadowRadius: 4,

    // elevation: 5,

    elevation: 3, // For shadow effect (Android)
    shadowColor: '#000', // For iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  scrollContainer: {
    height: deviceHeight - 200,
    // width: deviceWidth,
    // paddingHorizontal: 20,
    paddingBottom: 20,
  },

  flexRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
