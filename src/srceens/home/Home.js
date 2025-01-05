import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {DefaultStyle} from '../../utils/DefaultStyle';
import {saveToken} from '../../helper/Storage';
import Divider from '../../components/Divider';
import FeatureCard from '../../components/FeatureCard';


const Home = ({navigation}) => {
  const handleMakePayment = () => {
    navigation.navigate('Payment');
  };

  // useEffect(async() => {
  //   console.log(await getToken());
  // }, [])
  // const {user} = useContext(UserContext);
  // console.log(user)

  const handleLogout = async () => {
    await saveToken(null);
    navigation.reset({
      index: 0,
      routes: [{name: 'SignIn'}],
    });
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={DefaultStyle.dashboardContainer}>
          {/* Available Features */}
          <View style={[DefaultStyle.cardContainer, {marginTop: 8}]}>
            <Text style={DefaultStyle.fontBold}>Features</Text>
            <Divider />
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                rowGap: 16,
                columnGap: 32,
                padding: 10,
              }}>
              <FeatureCard
                feature={'Tests'}
                image={require('../../assets/tests.jpg')}
                onPress={() => navigation.navigate('Tests')}
                />
              <FeatureCard
                feature={'Notes'}
                image={require('../../assets/notes.jpg')}
                onPress={() => navigation.navigate('Notes')}
                />
              <FeatureCard
                feature={'My History'}
                image={require('../../assets/history.jpg')}
                onPress={() => navigation.navigate('History')}
              />
              <FeatureCard
                feature={'More features coming soon...'}
                image={require('../../assets/more.jpg')}
              />
            </View>
          </View>
        </View>
        {/* <SubmitModal /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
