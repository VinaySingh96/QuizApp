import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useContext, useState} from 'react';
import ButtonComponent from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import {DefaultStyle} from '../../utils/DefaultStyle';
import {FONT_SIZES} from '../../constants/Font';
import {buttonColor, THEME_COLOR} from '../../constants/Colour';
import {validateEmail} from '../../utils/Validator';
import RazorpayCheckout from 'react-native-razorpay';
import {UserContext} from '../../context/UserContext';

const Payment = () => {
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const amount = 1000.0;
  const {user} = useContext(UserContext);

  const paymentData = {
    description: 'Demo Payment',
    image:
      'https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?t=st=1735917245~exp=1735920845~hmac=8f9ecd75b7f91425288a14ecab02024bcb92a453307d82b9f2ee491f6caebbf9&w=1060',
    currency: 'INR',
    key: process.env.RAZORPAY_KEY_ID,
    amount: amount * 100.0,
    name: 'AppName',
    prefill: {
      email: email,
      contact: user.phoneNumber,
      name: user.name,
    },
    theme: {color: THEME_COLOR.primary},
  };

  const handlePayment = async () => {
    try {
      const res = await RazorpayCheckout.open(paymentData);
      Alert.alert('Payment Successful');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={DefaultStyle.lightBackground}>
      <KeyboardAvoidingView
        style={DefaultStyle.p2}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentContainerStyle={DefaultStyle.scrollContainer}
          keyboardShouldPersistTaps="handled">
          <View>
            <Image
              source={require('../../assets/payment.jpg')}
              style={DefaultStyle.welcomeImage}
            />
          </View>

          <Text style={styles.heading}>Total amount : ₹{amount}</Text>

          <CustomInput placeholder="Name" value={user.name} disabled={true} />
          <CustomInput
            placeholder="Phone Number"
            value={user.phoneNumber}
            disabled={true}
          />

          <CustomInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            error={
              email ? (validateEmail(email) ? null : 'Enter a valid email id') : null
            }
          />

          <CustomInput
            placeholder="Billing Address"
            value={address}
            onChangeText={setAddress}
            required={true}
          />

          <ButtonComponent
            label={`Continue`}
            onPress={handlePayment}
            iconRight="keyboard-double-arrow-right"
            disabled={!(amount && validateEmail(email) && address)}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexContainer: {
    // flex: 1,
  },
  heading: {
    fontSize: FONT_SIZES.HEADING,
    fontWeight: 'bold',
    color: buttonColor.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Payment;
