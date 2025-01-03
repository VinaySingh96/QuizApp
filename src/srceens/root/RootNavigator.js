import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../home/Home';
import SignInScreen from '../signIn/SignIn';
import { authenticate } from '../../helper/Storage';
import OtpScreen from '../otp/OtpScreen';
import SignUpScreen from '../signUp/SignUp';
import PaymentScreen from '../payment/Payment';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Manage authentication state

  useEffect(() => {
    const checkToken = async () => {
      try {
        const isAuthenticated = await authenticate();
        if (!isAuthenticated) setIsAuthenticated(false);
        else setIsAuthenticated(true);
      } catch (error) {
        console.error('Error checking token:', error);
        setIsAuthenticated(false);
      }
    };

    checkToken(); // Run the check when the app starts
  }, []);

  if (isAuthenticated === null) {
    return null; // Optionally, you can render a loading indicator while checking the token
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={isAuthenticated ? 'Home' : 'SignIn'}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
