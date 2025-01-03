import React, { useState } from 'react';
import RootNavigator from './root/RootNavigator';
import {DimensionProvider} from '../context/DimensionContext';
import {ThemeProvider} from '../context/ThemeContext';
import Splash from './splash/Splash';

const Index = () => {
  const [isSplashVisible, setSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setSplashVisible(false); // Hide the splash screen
  };

  return (
    <ThemeProvider>
      <DimensionProvider>
        {isSplashVisible ? (
          <Splash onFinish={handleSplashFinish} />
        ) : (
          <RootNavigator />
        )}
      </DimensionProvider>
    </ThemeProvider>
  );
};

export default Index;
