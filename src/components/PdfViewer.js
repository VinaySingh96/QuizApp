import React from 'react';
import { View, Dimensions, ToastAndroid } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfViewer = ({ navigation, route }) => {
  const {filePath} = route.params;
  
  const handleFileError = (error) => {
    console.log('File error :: ', error);
    ToastAndroid.show('Broken file', ToastAndroid.BOTTOM);
    navigation.goBack();
  }
  return (
    <View style={{ flex: 1 }}>
      <Pdf
        trustAllCerts={true}
        source={{ uri: filePath }}
        style={{ flex: 1, width: Dimensions.get('window').width }}
        onError={(error) => handleFileError(error)}
      />
    </View>
  );
};

export default PdfViewer;
