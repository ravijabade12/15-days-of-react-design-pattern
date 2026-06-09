import { useContext } from "react";
import { LanguageContext } from "../context";

const useLanguage = () => {
  const { language, toggleLanguage, translations } =
    useContext(LanguageContext);

  return { language, toggleLanguage, translations };
};

export { useLanguage };
