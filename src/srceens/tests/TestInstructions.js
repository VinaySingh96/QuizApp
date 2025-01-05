import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import ButtonComponent from '../../components/Button';

const TestInstructions = ({navigation, route}) => {
  const {testDetails} = route.params;

  const navigateToTest = () => {
    navigation.navigate('TestExecution', {
      testDetails,
    });
  };

  const handleStartTest = () => {
    Alert.alert(
      `Let's Start`,
      'Time to show your skills. All the best for your test!',
      [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Start',
          onPress: navigateToTest,
          style: 'ok',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>{testDetails.title}</Text>
        <Text style={styles.subtitle}>
          Duration: {testDetails.duration} minutes
        </Text>
        <Text style={styles.subtitle}>
          Total Marks: {testDetails.totalMarks}
        </Text>
        <Text style={styles.subtitle}>
          Passing Marks: {testDetails.passingMarks}
        </Text>

        <Text style={styles.instructionsTitle}>Instructions:</Text>
        {testDetails.instructions.map((instruction, index) => (
          <Text key={index} style={styles.instruction}>
            {index + 1}. {instruction}
          </Text>
        ))}

        {/* <View style={styles.checkboxContainer}>
        <CheckBox
          // value={isChecked}
          // onValueChange={setIsChecked}
          tintColors={{ true: '#007BFF', false: '#ccc' }}
        />
        <Text style={styles.checkboxLabel}>I agree to the terms and conditions</Text>
      </View> */}
      </View>

      <ButtonComponent label={'Start Test'} onPress={handleStartTest} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    gap: 8
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 5,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  instruction: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 5,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  checkboxLabel: {
    fontSize: 14,
    marginLeft: 8,
  },
  button: {
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TestInstructions;
