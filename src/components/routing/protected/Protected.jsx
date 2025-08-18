import { Navigate } from "react-router";
const Protected = ({ isSignedId, children }) => {
  if (!isSignedId) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default Protected;
