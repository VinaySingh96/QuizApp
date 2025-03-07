import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Divider from './Divider';
import { DefaultStyle } from '../utils/DefaultStyle';

const Accordion = ({ data, onPress }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    setActiveIndex(null);
  }, [data]);

  return (
    <ScrollView style={DefaultStyle.p2}>
      {data.map((topic, index) => (
        <View key={index} style={styles.accordionCard}>
          {/* Accordion Header */}
          <TouchableOpacity
            onPress={() => toggleAccordion(index)}
            style={styles.header}
          >
            <Text style={styles.headerText}>{topic.title}</Text>
          </TouchableOpacity>

          {/* Accordion Content */}
          <Collapsible collapsed={activeIndex !== index}>
            <View style={styles.content}>
              {topic.items.map((subtopic, i) => (
                <TouchableOpacity key={i} style={styles.subtopicContainer} onPress={() => onPress(subtopic)}>
                  <Text style={styles.subtopicText}>{i + 1}. {subtopic.title}</Text>
                  { i !== (topic.items.length - 1) && <Divider /> }
                </TouchableOpacity>
              ))}
            </View>
          </Collapsible>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  accordionCard: {
    marginBottom: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  header: {
    padding: 15,
    backgroundColor: '#f5f5f5',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },
  content: {
    padding: 15,
    backgroundColor: '#fff',
  },
  subtopicContainer: {
    marginBottom: 10,
  },
  subtopicText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtopicDescription: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
});

export default Accordion;
