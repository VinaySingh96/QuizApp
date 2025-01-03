import React from 'react';
import RootNavigator from './root/RootNavigator';
import {DimensionProvider} from '../context/DimensionContext';
import {ThemeProvider} from '../context/ThemeContext';

const Index = () => {
  return (
    <ThemeProvider>
      <DimensionProvider>
        <RootNavigator />
      </DimensionProvider>
    </ThemeProvider>
  );
};

export default Index;
