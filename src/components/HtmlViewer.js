import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import RenderHTML from 'react-native-render-html';
import {fetchMarkdown} from '../api/studyMaterial';
import {DefaultStyle} from '../utils/DefaultStyle';
import {useQuery} from '@tanstack/react-query';
import Tab from './Tab';
import { getLoadedpreference, saveUserPreferences } from '../helper/Storage';

const HtmlViewer = ({navigation, route}) => {
  const {width} = useWindowDimensions();
  const [fontSize, setFontSize] = useState(getLoadedpreference('fontSize'));
  const fileName = route.params.fileName;

  const fetchResource = async () => {
    return fetchMarkdown(fileName);
  };

  const {
    error,
    isLoading,
    data: htmlContent,
  } = useQuery({
    queryKey: [fileName],
    queryFn: fetchResource,
  });

  const fontSizeMap = {
    small: 12,
    medium: 16,
    large: 20,
  };

  const handleFontSizeChange = async (fontSize) => {
    setFontSize(fontSize);
    await saveUserPreferences({ key:'fontSize', value: fontSize });
  }

  return (
    <ScrollView style={[DefaultStyle.p2]}>
      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#007AFF"
          style={styles.loader}
        />
      ) : error ? (
        <Text style={styles.errorText}>
          {error.message || 'Failed to resource. Please try again.'}
        </Text>
      ) : (
        htmlContent && (
        <View>
          <Tab tabOptions={Object.keys(fontSizeMap)} onPress={handleFontSizeChange} selectedTab={fontSize} />
          <RenderHTML
            contentWidth={width}
            source={{html: htmlContent}}
            tagsStyles={{
              body: {
                fontSize: fontSizeMap[fontSize], // Dynamically set font size
              },
              p: {
                fontSize: fontSizeMap[fontSize], // Ensure paragraph font size is adjusted
              },
              h6: {
                fontSize: fontSizeMap[fontSize], // Ensure paragraph font size is adjusted
              },
            }}
          />
        </View>
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HtmlViewer;
