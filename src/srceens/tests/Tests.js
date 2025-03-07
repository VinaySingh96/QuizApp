import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, { useEffect } from 'react';
import {
  MOCK_TESTS,
} from '../../utils/MockData';
import Header from '../../components/Header';
import {DefaultStyle} from '../../utils/DefaultStyle';
import Divider from '../../components/Divider';
import TestCard from '../../components/TestCard';
import { getQuestions, getQuizTopics } from '../../api/questions';

const Tests = ({navigation}) => {
  const handleTestPress = (testId) => {
    navigation.navigate('TestInstructions', {
      testDetails: MOCK_TESTS[testId-1]
    });
  }

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const data = await getQuizTopics();
        // const data = await getQuestions('java');
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchTests();
  }, [])
  

  return (
    <SafeAreaView>
      <Header title={'Tests'} onPress={() => navigation.goBack()} />
      <View style={DefaultStyle.dashboardContainer}>
        <View style={DefaultStyle.cardContainer}>
          <Text style={DefaultStyle.fontBold}>Tests</Text>

          <Divider />
          <ScrollView style={DefaultStyle.scrollContainer}>
            {/* tests */}
            {/* TODO: Use flatlist */}
            {MOCK_TESTS.map(test => (
              <TestCard
                key={test.id}
                {...test}
                onPress={() => handleTestPress(test.id)}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Tests;
