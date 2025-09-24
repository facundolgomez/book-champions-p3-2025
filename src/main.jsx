import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthenticationContextProvider } from "./components/services/AuthContextProvider.jsx";
import { ThemeContextProvider } from "./components/services/theme/ThemeContextProvider.jsx";
import TranslateContextProvider from "./components/services/translation/TranslateContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TranslateContextProvider>
      <ThemeContextProvider>
        <AuthenticationContextProvider>
          <App />
        </AuthenticationContextProvider>
      </ThemeContextProvider>
    </TranslateContextProvider>
  </StrictMode>
);
