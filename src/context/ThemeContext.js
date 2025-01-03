import React, { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: '#007BFF',
    secondaryColor: '#FFC107',
    backgroundColor: '#F5F5F5',
    textColor: '#333333',
    iconColor: '#333333',
  });

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
