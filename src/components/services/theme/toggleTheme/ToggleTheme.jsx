import { useContext } from "react";
import { Button } from "react-bootstrap";

import { ThemeContext } from "../theme.context";
import { LIGHT_THEME } from "../consts";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button onClick={toggleTheme} className="me-3 my-3">
      Cambiar a tema {theme === LIGHT_THEME ? "oscuro" : "claro"}
    </Button>
  );
};

export default ToggleTheme;
