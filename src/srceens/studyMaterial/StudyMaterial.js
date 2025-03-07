import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  ToastAndroid,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Divider from '../../components/Divider';
import Header from '../../components/Header';
import {DefaultStyle} from '../../utils/DefaultStyle';
import Accordion from '../../components/Accordion';
import {fetchAllMaterials, pdfBaseUrl} from '../../api/studyMaterial';
import {useQuery} from '@tanstack/react-query';
import SearchBar from '../../components/SearchBar';
import Icon from 'react-native-vector-icons/MaterialIcons';

const fetchMaterials = async () => {
  return fetchAllMaterials();
};

const StudyMaterial = ({navigation}) => {
  const [materials, setMaterials] = useState(null); // State to hold filtered data
  const [noSearchFound, setNoSearchFound] = useState('');
  const originalMaterialsRef = React.useRef([]);
  const {isLoading, error, data} = useQuery({
    queryKey: ['materials'],
    queryFn: fetchMaterials,
    staleTime: 60000,
    cacheTime: 300000,
  });

  // Sync fetched data to materials state
  useEffect(() => {
    if (data) {
      setMaterials(data);
      originalMaterialsRef.current = data;
    }
  }, [data]);

  const handleSearch = query => {
    const originalMaterials = originalMaterialsRef.current;

    if (!originalMaterials || originalMaterials.length === 0) {
      console.log('Original materials are not set or empty!');
      return;
    }

    const filteredData = originalMaterials.filter(subject =>
      subject.title.toLowerCase().includes(query.toLowerCase()),
    );
    if (filteredData.length === 0) {
      setNoSearchFound(query);
    } else {
      setNoSearchFound('');
    }
    setMaterials(filteredData);
  };

  const handleSelectMaterial = resourceDetails => {
    switch (resourceDetails.category) {
      case 'md':
        navigation.navigate('HtmlViewer', {
          fileName: resourceDetails.source,
        });
        break;
      case 'pdf':
        navigation.navigate('PdfViewer', {
          filePath: `${pdfBaseUrl}/${resourceDetails.source}`,
        });
        break;
      default:
        ToastAndroid.show('File not supported', ToastAndroid.BOTTOM);
    }
  };

  return (
    <SafeAreaView style={DefaultStyle.container}>
      <Header title={'Materials'} onPress={() => navigation.goBack()} />
      <View style={DefaultStyle.dashboardContainer}>
        <View style={DefaultStyle.cardContainer}>
          <View style={styles.headerRow}>
            <Text style={DefaultStyle.fontBold}>Core Fundamentals</Text>
            <SearchBar placeholder="Search Materials" onSearch={handleSearch} />
          </View>
          <Divider />
          {noSearchFound && (
            <View style={DefaultStyle.itemsCenter}>
              <Icon name="search-off" size={24} color="gray" />
              <Text style={styles.errorText}>
                No material found for -&nbsp;
                <Text style={DefaultStyle.fontBold}>{noSearchFound}</Text>
              </Text>
            </View>
          )}
          <ScrollView style={DefaultStyle.scrollContainer}>
            {isLoading ? (
              <ActivityIndicator
                size="large"
                color="#007AFF"
                style={styles.loadingIndicator}
              />
            ) : error ? (
              <Text style={styles.errorText}>
                {error.message ||
                  'Failed to load study materials. Please try again.'}
              </Text>
            ) : (
              materials && (
                <Accordion data={materials} onPress={handleSelectMaterial} />
              )
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
    alignItems: 'center',
  },
});

export default StudyMaterial;
