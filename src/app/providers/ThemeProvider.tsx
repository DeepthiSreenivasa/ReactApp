import { useEffect, useState, type PropsWithChildren } from 'react';
import ThemeContext from '../../context/ThemeContext';

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [appTheme, setAppTheme] = useState(() => {
    let savedTheme = localStorage.getItem('theme');

    return savedTheme === 'light' || savedTheme === 'dark'
      ? savedTheme
      : 'light';
  });

  const toggleTheme = () => {
    setAppTheme((currentTheme) => {
      let nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', nextTheme);
      return nextTheme;
    });
  };

  useEffect(() => {
    localStorage.getItem('theme');
  }, [appTheme]);

  return (
    <ThemeContext.Provider value={{ theme: appTheme, setTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
