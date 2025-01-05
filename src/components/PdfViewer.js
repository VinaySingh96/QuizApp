import React from 'react';
import { View, Dimensions } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfViewer = ({ navigation, route }) => {
  const {filePath} = route.params;
  return (
    <View style={{ flex: 1 }}>
      <Pdf
        trustAllCerts={false}
        source={{ uri: filePath }}
        style={{ flex: 1, width: Dimensions.get('window').width }}
        onError={(error) => console.log(error)}
      />
    </View>
  );
};

export default PdfViewer;
