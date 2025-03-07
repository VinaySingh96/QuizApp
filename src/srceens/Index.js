import React, {useState, useEffect} from 'react';
import RootNavigator from './root/RootNavigator';
import {DimensionProvider} from '../context/DimensionContext';
import {ThemeProvider} from '../context/ThemeContext';
import {UserProvider} from '../context/UserContext';
import Splash from './splash/Splash';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { getUserPreferences } from '../helper/Storage';

const queryClient = new QueryClient();

const Index = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setSplashVisible(false); // Hide the splash screen
  };

  useEffect(() => {
    const fetchData = async () => {
      await getUserPreferences();
    };

    fetchData();
  }, []);
  

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ThemeProvider>
          <DimensionProvider>
            {isSplashVisible ? (
              <Splash onFinish={handleSplashFinish} />
            ) : (
              <RootNavigator />
            )}
          </DimensionProvider>
        </ThemeProvider>
      </UserProvider>
    </QueryClientProvider>
  );
};

export default Index;
