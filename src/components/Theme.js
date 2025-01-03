import React, { createContext, useState } from 'react';

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState({
    primaryColor: '#007BFF',
    textColor: 'white',
    iconColor: 'white',
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      primaryColor: prevTheme.primaryColor === '#007BFF' ? '#333' : '#007BFF',
      textColor: prevTheme.textColor === 'white' ? '#f5f5f6' : 'white',
      iconColor: prevTheme.iconColor === 'white' ? '#f5f5f5' : 'white',
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};