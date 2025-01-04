import React, {useState} from 'react';
import RootNavigator from './root/RootNavigator';
import {DimensionProvider} from '../context/DimensionContext';
import {ThemeProvider} from '../context/ThemeContext';
import {UserProvider} from '../context/UserContext';
import Splash from './splash/Splash';

const Index = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setSplashVisible(false); // Hide the splash screen
  };

  return (
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
  );
};

export default Index;
