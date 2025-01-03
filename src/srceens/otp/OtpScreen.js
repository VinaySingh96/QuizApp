import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert, SafeAreaView, Image} from 'react-native';
import OTPInputView from 'react-native-otp-input';
import RNOtpVerify from 'react-native-otp-verify';
import ButtonComponent from '../../components/Button';
import {saveToken} from '../../helper/Storage';
import {DefaultStyle} from '../../utils/DefaultStyle';

const OtpScreen = ({navigation}) => {
  const [otp, setOtp] = useState('1234');

  useEffect(() => {
    RNOtpVerify.getOtp()
      .then(() => RNOtpVerify.addListener(handleOtpRead))
      .catch(error => console.log('Error fetching OTP:', error));

    return () => RNOtpVerify.removeListener(); // Clean up the listener
  }, []);

  const handleOtpRead = message => {
    const otpRegex = /\d{4}/; // Matches a 4-digit OTP
    const extractedOtp = message.match(otpRegex)?.[0];
    if (extractedOtp) {
      setOtp(extractedOtp); // Auto-fill OTP
      RNOtpVerify.removeListener(); // Stop listening after OTP is read
    }
  };

  const handleVerify = async () => {
    console.log('OTP = ', otp);
    // TODO: replace with actual otp
    if (otp === '1234') {
      await saveToken('token');
      Alert.alert('OTP Verified Successfully');
      navigation.reset({
        index: 0,
        routes: [{name: 'Home'}],
      });
    } else {
      Alert.alert('Invalid OTP', 'Please try again.');
    }
  };

  return (
    <SafeAreaView style={DefaultStyle.backgroundColor}>
      <View style={DefaultStyle.p2}>
        <View>
          <Image
            source={require('../../assets/otp.jpg')}
            style={DefaultStyle.welcomeImage}
          />
        </View>
        <View style={DefaultStyle.itemsCenter}>
          <Text style={DefaultStyle.primaryHeading}>Enter the OTP</Text>
          <OTPInputView
            style={styles.otpContainer}
            pinCount={4}
            code={otp} // Use state to manage OTP
            autoFocusOnLoad
            codeInputFieldStyle={styles.otpInput}
            codeInputHighlightStyle={styles.otpInputHighlight}
            onCodeFilled={code => setOtp(code)} // Optional callback
          />
        </View>
        <ButtonComponent
          label="Verify OTP"
          onPress={handleVerify}
          iconRight={'check-circle'}
        />
      </View>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
  },
  otpContainer: {
    width: '80%',
    height: 100,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  otpInputHighlight: {
    borderColor: '#007BFF',
  },
});
