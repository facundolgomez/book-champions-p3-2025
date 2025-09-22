import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthenticationContextProvider } from "./components/services/AuthContextProvider.jsx";
import { ThemeContextProvider } from "./components/services/theme/ThemeContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <AuthenticationContextProvider>
        <App />
      </AuthenticationContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);
