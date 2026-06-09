import { useAuth } from "../hook/useAuth";
import { useLanguage } from "../hook/useLanguage";

const Navbar = () => {
  const { user, isAuthenticated, login, logout } = useAuth();
  const { language, toggleLanguage, translations } = useLanguage();

  return (
    <div>
      <h1>{translations.greeting}</h1>
      <p>
        {translations.currentLanguage}: {language.toUpperCase()}
      </p>
      <button onClick={toggleLanguage}>{translations.switchLanguage}</button>

      {isAuthenticated ? (
        <div>
          <p>
            {translations.greeting}, {user.name}!
          </p>
          <button onClick={logout}>{translations.logout}</button>
        </div>
      ) : (
        <button onClick={login}>{translations.login}</button>
      )}
    </div>
  );
};

export default Navbar;
