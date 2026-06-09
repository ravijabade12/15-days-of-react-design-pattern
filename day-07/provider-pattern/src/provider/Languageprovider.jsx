import { useState } from "react";
import PropTypes from "prop-types";
import { LanguageContext } from "../context";

const translations = {
  en: {
    greeting: "Welcome",
    login: "Login",
    logout: "Logout",
    dashboard: "Dashboard",
    currentLanguage: "Current language",
    switchLanguage: "Switch language",
  },
  es: {
    greeting: "Bienvenido",
    login: "Iniciar sesión",
    logout: "Cerrar sesión",
    dashboard: "Panel",
    currentLanguage: "Idioma actual",
    switchLanguage: "Cambiar idioma",
  },
  fr: {
    greeting: "Bienvenue",
    login: "Connexion",
    logout: "Déconnexion",
    dashboard: "Tableau de bord",
    currentLanguage: "Langue actuelle",
    switchLanguage: "Changer de langue",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      if (prev === "en") return "es";
      if (prev === "es") return "fr";
      return "en";
    });
  };

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, translations: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
