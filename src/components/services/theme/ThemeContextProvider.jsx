import { ThemeContext } from "./theme.context";
import { useEffect, useState } from "react";
import { LIGHT_THEME, DARK_THEME } from "./consts";

const themeValue = localStorage.getItem("theme") || LIGHT_THEME;

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(themeValue);

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === LIGHT_THEME) {
      localStorage.setItem("theme", DARK_THEME);
      setTheme(DARK_THEME);
    } else {
      localStorage.setItem("theme", LIGHT_THEME);
      setTheme(LIGHT_THEME);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
