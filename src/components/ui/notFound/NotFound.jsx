import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";

const NotFound = () => {
  const navigate = useNavigate();

  const goBackLoginHandler = () => {
    navigate("/login");
  };

  return (
    <div className="text-center mt-3">
      <h2>Ups! La pagina solicitada no fue encontrada</h2>
      <Button className="text-center" onClick={goBackLoginHandler}>
        Volver a iniciar sesion
      </Button>
    </div>
  );
};

export default NotFound;
