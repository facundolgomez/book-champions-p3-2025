import { useState } from "react";
import { TranslationContext } from "./translation.context";

const tValue = localStorage.getItem("translation");

const TranslateContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(tValue ?? "en");

  const changeLanguageHandler = (newLanguage) => {
    localStorage.setItem("translation", newLanguage);
    setLanguage(newLanguage);
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguageHandler }}>
      {children}
    </TranslationContext.Provider>
  );
};

export default TranslateContextProvider;
