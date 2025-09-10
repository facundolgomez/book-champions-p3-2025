import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Login from "./components/auth/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/ui/notFound/NotFound";
import Protected from "./components/routing/protected/Protected";
import { ToastContainer } from "react-toastify";

import { useState } from "react";
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route element={<Protected isSignedIn={loggedIn} />}>
              <Route
                path="/library/*"
                element={
                  <>
                    <Dashboard onLogout={handleLogout} />
                    <ToastContainer />
                  </>
                }
              />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
