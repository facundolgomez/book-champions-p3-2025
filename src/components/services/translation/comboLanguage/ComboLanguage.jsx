import { useContext } from "react";
import { Form } from "react-bootstrap";
import { TranslationContext } from "../translation.context";
import { useTranslate } from "../useTranslate";
const ComboLanguage = () => {
  const { language, changeLanguageHandler } = useContext(TranslationContext);

  const translate = useTranslate();

  const changeLanguage = (event) => {
    changeLanguageHandler(event.target.value);
  };
  console.log("Idioma actual:", language);

  return (
    <Form.Select
      onChange={changeLanguage}
      value={language}
      aria-label="Select-language"
      className="w-50 mb-4"
    >
      <option value="es">{translate("spanish_lang")}</option>
      <option value="en">{translate("english_lang")}</option>
    </Form.Select>
  );
};

export default ComboLanguage;
