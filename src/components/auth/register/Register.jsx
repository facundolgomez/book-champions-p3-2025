import { useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import AuthContainer from "../authContainer/AuthContainer";
import { successToast } from "../../ui/notifications/notifications";

const Register = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/register", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ userName, email, password }),
    })
      .then((res) => res.json())
      .then(() => {
        successToast("Usuario creado exitosamente");

        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AuthContainer>
        <Form>
          <FormGroup className="mb-4">
            <Form.Control
              type="text"
              placeholder="Ingresar nombre de usuario"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
          </FormGroup>
          <FormGroup className="mb-4">
            <Form.Control
              type="email"
              placeholder="Ingresar email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </FormGroup>
          <FormGroup className="mb-4">
            <Form.Control
              type="password"
              placeholder="Ingresar contraseña"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </FormGroup>

          <Row>
            <Col md={6} className="d-flex justify-content-end">
              <Button
                variant="secondary"
                type="button"
                onClick={() => navigate("/login")}
              >
                Iniciar sesión
              </Button>
            </Col>
            <Col className="text-center">
              <Button
                variant="primary"
                className="w-100"
                onClick={handleRegister}
              >
                Registrarse
              </Button>
            </Col>
          </Row>
        </Form>
      </AuthContainer>
    </>
  );
};

export default Register;
