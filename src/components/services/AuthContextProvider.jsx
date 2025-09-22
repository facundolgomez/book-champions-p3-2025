import { useState } from "react";
import { AuthenticationContext } from "./auth.context";

const tokenValue = localStorage.getItem("book-champions-token");

export const AuthenticationContextProvider = ({ children }) => {
  const [token, setToken] = useState(tokenValue);

  const handleUserLogin = (newToken) => {
    localStorage.setItem("book-champions-token", newToken);
    setToken(newToken);
  };

  const handleUserLogout = () => {
    localStorage.removeItem("book-champions-token");
    setToken(null);
  };

  return (
    <AuthenticationContext.Provider
      value={{ token, handleUserLogin, handleUserLogout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
