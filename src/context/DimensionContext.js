// DimensionContext.js
import React, { createContext, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

// Create the DimensionContext
export const DimensionContext = createContext();

export const DimensionProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    isSmallDevice: Dimensions.get('window').width < 360,
  });

  useEffect(() => {
    // Update dimensions on screen resize (e.g., orientation changes)
    const onChange = ({ window }) => {
      setDimensions({
        width: window.width,
        height: window.height,
        isSmallDevice: window.width < 360,
      });
    };

    const subscription = Dimensions.addEventListener('change', onChange);

    return () => subscription?.remove();
  }, []);

  return (
    <DimensionContext.Provider value={dimensions}>
      {children}
    </DimensionContext.Provider>
  );
};
