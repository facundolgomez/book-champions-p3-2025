import { Card, Row } from "react-bootstrap";
import ToggleTheme from "../../services/theme/toggleTheme/ToggleTheme";
import ComboLanguage from "../../services/translation/comboLanguage/ComboLanguage";

const AuthContainer = ({ children }) => {
  return (
    <Card className="mt-5 mx-3 p-3 px-5 shadow">
      <Card.Body>
        <Row className="mb-2">
          <h5>¡Bienvenidos a Books Champion!</h5>
        </Row>
        <ComboLanguage />
        <ToggleTheme />

        {children}
      </Card.Body>
    </Card>
  );
};

export default AuthContainer;
