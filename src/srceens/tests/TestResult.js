import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

const TestResult = ({navigation, route}) => {
  const {
    totalMarks,
    marksObtained,
    correctAnswers,
    incorrectAnswers,
    totalQuestions,
  } = route.params;
  const accuracy = correctAnswers / totalQuestions;
  const percentage = marksObtained / totalMarks;
  // useEffect(() => {
  //   navigation.reset({
  //     index: 0, // Set the index to 0 to make Home the first screen
  //     routes: [
  //       {
  //         name: 'Dashboard', // Your Home screen name
  //       },
  //     ],
  //   });
  // }, []);

  const handleGoToDashboard = () => {
    navigation.reset({
      index: 0, // Set the index to 0 to make Home the first screen
      routes: [
        {
          name: 'Dashboard', // Your Home screen name
        },
      ],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Test Results</Text>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Total Marks:</Text>
        <Text style={styles.resultValue}>{totalMarks}</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Marks Obtained:</Text>
        <Text style={styles.resultValue}>{marksObtained}</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Percentage:</Text>
        <Text style={styles.resultValue}>{percentage*100}%</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Correct Answers:</Text>
        <Text style={styles.resultValue}>{correctAnswers}</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Incorrect Answers:</Text>
        <Text style={styles.resultValue}>{incorrectAnswers}</Text>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Accuracy:</Text>
        <Text style={styles.resultValue}>{accuracy*100}%</Text>
      </View>

      <TouchableOpacity
        style={styles.retryButton}
        onPress={() =>
          ToastAndroid.show('Under development', ToastAndroid.BOTTOM)
        }>
        <Text style={styles.buttonText}>Retry Test</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.homeButton} onPress={handleGoToDashboard}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultValue: {
    fontSize: 18,
    color: '#333',
  },
  retryButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    marginVertical: 10,
  },
  homeButton: {
    backgroundColor: '#28a745',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TestResult;
