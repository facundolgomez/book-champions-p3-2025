import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import { AuthenticationContext } from "../../services/auth.context";
import { isTokenValid } from "../../auth/auth.helpers";

const Protected = () => {
  const { token } = useContext(AuthenticationContext);
  if (!isTokenValid(token)) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default Protected;
