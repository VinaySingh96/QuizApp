import React, {useContext, useState, useRef} from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {DimensionContext} from '../../context/DimensionContext';
import {APP_INFO} from '../../constants/AppInfo';
import {FONT_SIZES} from '../../constants/Font';
import {DefaultStyle} from '../../utils/DefaultStyle';
import {textColor} from '../../constants/Colour';
import ButtonComponent from '../../components/Button';
import PhoneInput from 'react-native-phone-number-input';
import {login} from '../../api/auth';

const SignIn = ({navigation}) => {
  const {width} = useContext(DimensionContext);
  const styles = StyleSheet.create({
    container: {},
    heading: {
      fontSize: FONT_SIZES.HEADING,
    },
  });

  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const phoneInput = useRef(PhoneInput); // Properly initialize the ref

  const handleContinue = async () => {
    const isValidNumber = phoneInput.current?.isValidNumber(formattedValue); // Check if the phone number is valid
    if (isValidNumber) {
      const {isNewUser} = await login(formattedValue);
      if (!isNewUser) {
        // navigate to otp screen
        navigation.navigate('Otp', { phoneNumber: formattedValue });
      } else {
        // navigate to signup screen
        navigation.navigate('SignUp', {phoneNumber: formattedValue});
      }
      // Handle navigation or next step
    } else {
      console.error('Invalid phone number');
    }
  };

  return (
    <SafeAreaView style={DefaultStyle.backgroundColor}>
      <View style={DefaultStyle.p2}>
        <View>
          <Image
            source={require('../../assets/learningIllustration.jpg')}
            style={DefaultStyle.welcomeImage}
          />
        </View>

        <View style={DefaultStyle.itemsCenter}>
          <Text style={DefaultStyle.primaryHeading}>Welcome!</Text>
          <Text
            style={[DefaultStyle.primaryHeading, {color: textColor.secondary}]}>
            To {APP_INFO.appName}
          </Text>
          <Text style={DefaultStyle.smallText}>Notes | Test | Result</Text>
        </View>

        <View>
          <PhoneInput
            ref={phoneInput} // Attach the ref correctly
            defaultValue={value}
            defaultCode="IN" // Change to your desired country code (e.g., "IN" for India)
            layout="first"
            onChangeText={text => setValue(text)}
            onChangeFormattedText={text => setFormattedValue(text)}
            withDarkTheme
            withShadow
            autoFocus
            containerStyle={{width: '100%'}}
          />
        </View>

        <ButtonComponent
          label={'Continue'}
          iconRight={'keyboard-double-arrow-right'}
          onPress={handleContinue}
        />
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
