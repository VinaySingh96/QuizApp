import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from '../signIn/SignIn';
import { getToken } from '../../helper/Storage';
import OtpScreen from '../otp/OtpScreen';
import SignUpScreen from '../signUp/SignUp';
import PaymentScreen from '../payment/Payment';
import { UserContext } from '../../context/UserContext';
import { fetchUserProfile } from '../../api/user';
import DrawerNavigator from '../drawerNavigator/DrawerNavigator';
import 'react-native-gesture-handler';
import Tests from '../tests/Tests';
import Notes from '../notes/Notes';
import History from '../history/History';
import PdfViewer from '../../components/PdfViewer';
import TestInstructions from '../tests/TestInstructions';
import TestExecution from '../tests/TestExecution';
import TestResult from '../tests/TestResult';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Manage authentication state
  const {setUser} = useContext(UserContext);

  useEffect(() => {
    const checkToken = async () => {
      try {
        const token = await getToken();
        if (!token) setIsAuthenticated(false);
        else {
          const response = await fetchUserProfile(token);
          setUser(response.user)
          setIsAuthenticated(true);
        }
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
        initialRouteName={isAuthenticated ? 'Dashboard' : 'SignIn'}>
        <Stack.Screen name="Dashboard" component={DrawerNavigator} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Otp" component={OtpScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Tests" component={Tests} />
        <Stack.Screen name="Notes" component={Notes} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="PdfViewer" component={PdfViewer} />
        <Stack.Screen name="TestInstructions" component={TestInstructions} />
        <Stack.Screen name="TestExecution" component={TestExecution} />
        <Stack.Screen name="TestResult" component={TestResult} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
