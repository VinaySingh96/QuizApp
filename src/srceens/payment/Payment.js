import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import ButtonComponent from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import {DefaultStyle} from '../../utils/DefaultStyle';
import {FONT_SIZES} from '../../constants/Font';
import {buttonColor, THEME_COLOR} from '../../constants/Colour';
import {validateEmail} from '../../utils/Validator';
import RazorpayCheckout from 'react-native-razorpay';

const Payment = () => {
  // Get name and contact number from user context
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const amount = 1000.0;
  const name = 'User Name';

  const paymentData = {
    description: 'Demo Payment',
    image: 'https://img.freepik.com/free-vector/creative-gradient-code-logo_23-2148820572.jpg?t=st=1735917245~exp=1735920845~hmac=8f9ecd75b7f91425288a14ecab02024bcb92a453307d82b9f2ee491f6caebbf9&w=1060', // Recept image 
    currency: 'INR',
    key: process.env.RAZORPAY_KEY_ID, // Your api key
    amount: amount * 100.0,
    name: 'AppName',
    prefill: {
      email: email,
      contact: '9191919191',
      name: name,
    },
    theme: {color: THEME_COLOR.primary},
  };

  // main logic should be handled in payment helper
  const handlePayment = async () => {
    try {
      const res = await RazorpayCheckout.open(paymentData);
      // TODO: save response(razorpay_payment_id) to db(api call)
      Alert.alert('Payment Successful');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={DefaultStyle.backgroundColor}>
      <View style={DefaultStyle.p2}>
        <View>
          <Image
            source={require('../../assets/payment.jpg')}
            style={DefaultStyle.welcomeImage}
          />
        </View>

        <Text style={styles.heading}>Total amount : ₹{amount}</Text>

        <CustomInput placeholder="Name" value={name} disabled={true} />

        {/* Billing Email */}
        <CustomInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />

        {/* Billing Address */}
        <CustomInput
          placeholder="Billing Address"
          value={address}
          onChangeText={setAddress}
          required={true}
        />

        {/* Exam Dropdown */}

        {/* Sign Up Button */}
        <ButtonComponent
          label={`Continue`}
          onPress={handlePayment}
          iconRight="chevron-right"
          disabled={!(amount && name && validateEmail(email) && address)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  heading: {
    fontSize: FONT_SIZES.HEADING,
    fontWeight: 'bold',
    color: buttonColor.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: FONT_SIZES.INPUT,
    marginBottom: 15,
    color: '#333',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    overflow: 'hidden',
  },
  dropdown: {
    fontSize: FONT_SIZES.INPUT,
    padding: 12,
    color: '#333',
  },
});

export default Payment;
