import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {DefaultStyle} from '../../utils/DefaultStyle';
import Header from '../../components/Header';
import Divider from '../../components/Divider';
import ChapterCard from '../../components/ChapterCard';

const Notes = ({navigation}) => {
  const chapters = [
    {
      id: 1,
      title: 'Chapter 1: Introduction to React',
      description: 'This chapter introduces the basics of React.',
      imageUrl:
        'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png',
      pdfUrl: 'https://www.lcg.ufrj.br/nodejs/books/react-beginners-handbook.pdf',
    },
    {
      id: 2,
      title: 'Chapter 2: Advanced React Concepts',
      description: 'Deep dive into advanced concepts of React.',
      imageUrl: 'https://reactnative.dev/img/tiny_logo.png',
      pdfUrl: 'https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf',
    },
  ];

  const handleCardPress = chapterId => {
    navigation.navigate('PdfViewer', {
      filePath: chapters[chapterId - 1]?.pdfUrl,
    });
  };

  return (
    <SafeAreaView>
      <Header title={'Notes'} onPress={() => navigation.goBack()} />
      <View style={DefaultStyle.dashboardContainer}>
        <View style={DefaultStyle.cardContainer}>
          <Text style={DefaultStyle.fontBold}>Chapters</Text>
          <Divider />
          <ScrollView style={DefaultStyle.scrollContainer}>
            {/* Chapters */}
            {chapters.map(chapter => (
              <ChapterCard
                key={chapter.id}
                title={chapter.title}
                description={chapter.description}
                imageUrl={chapter.imageUrl}
                onPress={() => handleCardPress(chapter.id)}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Notes;
