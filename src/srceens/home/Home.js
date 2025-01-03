import React, { useEffect } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import ButtonComponent from '../../components/Button'
import { DefaultStyle } from '../../utils/DefaultStyle'

const Home = ({ navigation }) => {
  const handleMakePayment = () => {
    navigation.navigate('Payment');
  }
  
  return (
    <SafeAreaView>
      <View style={DefaultStyle.p2}>
        <ButtonComponent label={'Make Payment'} iconRight={'account-balance-wallet'} onPress={handleMakePayment} />
      </View>
    </SafeAreaView>
  )
}

export default Home