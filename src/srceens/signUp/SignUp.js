import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  SafeAreaView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {DefaultStyle} from '../../utils/DefaultStyle';
import {buttonColor} from '../../constants/Colour';
import {FONT_SIZES} from '../../constants/Font';
import {EXAMS} from '../../constants/Exams';
import ButtonComponent from '../../components/Button';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [selectedExam, setSelectedExam] = useState(null);

  const handleSignUp = () => {
    if (!name || !selectedExam) {
      Alert.alert('Error', 'Please fill in both fields.');
      return;
    }
    Alert.alert(
      'Success',
      `Welcome, ${name}! You are preparing for: ${selectedExam}`,
    );
    navigation.navigate('Otp');
  };

  return (
    <SafeAreaView style={DefaultStyle.backgroundColor}>
      <View style={DefaultStyle.p2}>
        <View>
          <Image
            source={require('../../assets/signUp.jpg')}
            style={DefaultStyle.welcomeImage}
          />
        </View>

        <Text style={styles.heading}>Sign Up</Text>

        {/* Name Input */}
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

        {/* Exam Dropdown */}
        <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={value => setSelectedExam(value)}
            items={EXAMS}
            value={selectedExam}
            placeholder={{label: 'Preparing for...', value: null}}
            style={{
              inputIOS: styles.dropdown,
              inputAndroid: styles.dropdown,
            }}
            useNativeAndroidPickerStyle={false} // Use custom styles for Android
          />
        </View>

        {/* Sign Up Button */}
        <ButtonComponent
          label="Sign Up"
          onPress={handleSignUp}
          iconRight="how-to-reg"
          disabled={!selectedExam || !name}
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

export default SignUp;
