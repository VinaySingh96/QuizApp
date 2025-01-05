import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  ToastAndroid,
} from 'react-native';
import Timer from '../../components/Timer';
import {MOCK_FRONTEND_QUESTIONS} from '../../utils/MockData';
import {buttonColor, textColor} from '../../constants/Colour';
import ButtonComponent from '../../components/Button';
import {FONT_SIZES} from '../../constants/Font';
import {DefaultStyle} from '../../utils/DefaultStyle';
import RenderHTML from 'react-native-render-html';

const TestExecution = ({navigation, route}) => {
  const {testDetails} = route.params;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  // TODO: take questionsId from testDetails and get question from Test context
  // const questions = testDetails.questions;
  const questions = MOCK_FRONTEND_QUESTIONS;

  const handleAnswerSelect = (questionId, option) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      Alert.alert(
        'Submit Test?',
        'Are you sure you want to submit, you can not go back.',
        [{text: 'Submit', onPress: navigateToResult}],
      );
    }
  };
  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      ToastAndroid.show('This is the first question', ToastAndroid.BOTTOM);
    }
  };

  const handleSubmit = () => {
    Alert.alert(
      'Submit Test?',
      'Are you sure you want to submit, you can not go back.',
      [
        {text: 'Cancel', onPress: () => {}},
        {text: 'Submit', onPress: navigateToResult},
      ],
      {
        cancelable: true,
        onDismiss: () => {},
      },
    );
  };

  const navigateToResult = () => {
    let marksObtained = 0, correctAnswers = 0, incorrectAnswers = 0;
    for (let answeredIndex of Object.keys(answers)) {
      const isCorrectAnswer = answers[answeredIndex] === MOCK_FRONTEND_QUESTIONS[answeredIndex].correctAnswer;
      marksObtained += isCorrectAnswer ? 4 : 0;
      correctAnswers += isCorrectAnswer ? 1 : 0;
      incorrectAnswers += !isCorrectAnswer ? 1 : 0;
    }
    const result = {
      totalMarks: testDetails.totalMarks,
      marksObtained,
      correctAnswers,
      incorrectAnswers,
      totalQuestions: MOCK_FRONTEND_QUESTIONS.length
    }
    navigation.navigate('TestResult', {
      ...result
    });
  };

  const onSelectQuestionIndex = index => {
    setCurrentQuestionIndex(index);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <View style={DefaultStyle.flexRow}>
        <Timer
          duration={testDetails.duration * 60}
          onTimeUp={handleSubmit}
          fontSize={14}
        />
        <ButtonComponent
          label={'Submit'}
          fontSize={FONT_SIZES.SMALL}
          backgroundColor={textColor.placeholder}
          paddingVertical={6}
          onPress={handleSubmit}
        />
      </View>
      {/* <Text style={styles.questionText}>{`Q${currentQuestionIndex + 1}: ${
        currentQuestion.question
      }`}</Text> */}

      {/* Questions pallate */}
      <View style={[DefaultStyle.flexRow]}>
        <FlatList
          data={questions}
          keyExtractor={item => item.question}
          horizontal={true}
          contentContainerStyle={{paddingHorizontal: 2, gap: 5}}
          renderItem={({item, index}) => {
            return (
              <ButtonComponent
                label={index}
                fontSize={FONT_SIZES.SMALL}
                onPress={() => onSelectQuestionIndex(index)}
                outline={true}
                textColor={
                  index === currentQuestionIndex
                    ? textColor.light
                    : textColor.dark
                }
                backgroundColor={
                  index === currentQuestionIndex ? buttonColor.primary : '#FFF'
                }
                paddingVertical={9}
              />
            );
          }}
        />
      </View>

      <RenderHTML
        contentWidth={300} // Set your content width
        source={{html: currentQuestion.question}}
      />
      <FlatList
        data={currentQuestion.options}
        keyExtractor={item => item}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={[
                styles.option,
                answers[currentQuestion.id] === item && styles.selectedOption,
              ]}
              onPress={() => handleAnswerSelect(currentQuestion.id, item)}>
              <Text style={styles.optionText}>
                {index + 1} | &nbsp; {item}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      {/* <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>
          {currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'}
        </Text>
      </TouchableOpacity> */}
      <View style={DefaultStyle.flexRow}>
        <ButtonComponent
          iconLeft={'arrow-back'}
          label="Prev"
          textColor={textColor.dark}
          backgroundColor={'white'}
          outline={true}
          onPress={handlePrev}
        />
        <ButtonComponent
          iconRight={'arrow-forward'}
          label={
            currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next'
          }
          textColor={textColor.dark}
          backgroundColor={'white'}
          outline={true}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    gap: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  option: {
    padding: 15,
    // backgroundColor: '#f1f1f1',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: textColor.primary,
    marginBottom: 10,
  },
  selectedOption: {
    borderColor: textColor.warningDark,
  },
  optionText: {
    color: '#333',
    fontSize: 16,
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TestExecution;
