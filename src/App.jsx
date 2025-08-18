import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Login from "./components/auth/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import NotFound from "./components/ui/notFound/NotFound";
import Protected from "./components/routing/protected/Protected";
import { useState } from "react";
const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };
  return (
    <>
      <div className="d-flex flex-column align-items-center">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="login" />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route
              path="/library"
              element={
                <Protected isSignedId={loggedIn}>
                  <Dashboard />
                </Protected>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
