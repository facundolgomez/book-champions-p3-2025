import { useRef, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router";
import AuthContainer from "../authContainer/AuthContainer";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrors({ ...errors, email: false });
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setErrors({ ...errors, password: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!emailRef.current.value.length) {
      setErrors({ ...errors, email: true });
      alert("Email vacio!");
      emailRef.current.focus();
      return;
    } else if (!password.length || password.length < 7) {
      setErrors({ ...errors, password: true });
      alert("Password incorrecto");
      passwordRef.current.focus();
      return;
    }
    setErrors({ email: false, password: false });
    alert(`El email ingresado es: ${email} y el password es ${password}`);
    onLogin();
    fetch("http://localhost:3000/login", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((token) => {
        localStorage.setItem("book-champions-token", token);
        navigate("/library");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AuthContainer>
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-4">
            <Form.Control
              type="email"
              placeholder="Ingresar email"
              onChange={handleEmailChange}
              value={email}
              ref={emailRef}
              className={errors.email && "border border-danger"}
            />
          </FormGroup>
          <FormGroup className="mb-4">
            <Form.Control
              type="password"
              placeholder="Ingresar contraseña"
              onChange={handlePasswordChange}
              value={password}
              ref={passwordRef}
              className={errors.password && "border border-danger"}
            />
          </FormGroup>
          <Row>
            <Col />
            <Col md={6} className="d-flex justify-content-end">
              <Button variant="secondary" type="submit">
                Iniciar sesión
              </Button>
            </Col>
          </Row>
          <Row className="mt-4">
            <p className="text-center fw-bold">¿Aun no tenes cuenta?</p>
            <Button onClick={() => navigate("/register")}>Registrarse</Button>
          </Row>
        </Form>
      </AuthContainer>
      {(errors.email || errors.password) && (
        <p style={{ color: "red" }}>
          Debe completar los campos para inciar sesion
        </p>
      )}
    </>
  );
};

export default Login;
