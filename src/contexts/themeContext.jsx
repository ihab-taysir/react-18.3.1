const { createContext, useContext, useState, useEffect } = require("react");
const { THEMES } = require("../Constants/THEMES");

const themeContext = createContext(null);

const useThemeContext = () => useContext(themeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || THEMES.LIGHT
  );

  const toggleTheme = () => {
    setTheme((prevState) =>
      prevState === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    );
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export { themeContext, useThemeContext, ThemeProvider };
