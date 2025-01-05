import {View, Text, SafeAreaView, ScrollView, ToastAndroid} from 'react-native';
import React from 'react';
import {DefaultStyle} from '../../utils/DefaultStyle';
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import {testResults} from '../../utils/MockData';
import TestResultCard from '../../components/TestResultCard';

const History = ({navigation}) => {
  const handleCardPress = testId => {
    ToastAndroid.show('Feature Under Progress', ToastAndroid.BOTTOM);
  };

  return (
    <SafeAreaView>
      <Header title={'My Test Reports'} onPress={() => navigation.goBack()} />
      <View style={DefaultStyle.dashboardContainer}>
        <View style={DefaultStyle.cardContainer}>
          <Text style={DefaultStyle.fontBold}>Test Results</Text>
          <Divider />
          <ScrollView style={DefaultStyle.scrollContainer}>
            {/* tests */}
            {/* TODO: Use flatmap */}
            {testResults.map(result => (
              <TestResultCard
                key={result.id}
                title={result.title}
                description={result.description}
                imageUrl={result.imageUrl}
                totalMarks={result.totalMarks}
                marksObtained={result.marksObtained}
                duration={result.duration}
                passingMarks={result.passingMarks}
                date={result.date}
                onPress={handleCardPress}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default History;
