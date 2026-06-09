import { useAuth } from "../hook/useAuth";
import { useLanguage } from "../hook/useLanguage";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const { translations } = useLanguage();

  return (
    <div>
      <h1>{translations.dashboard}</h1>
      {isAuthenticated && (
        <p>
          {translations.greeting}, {user.name}!
        </p>
      )}
    </div>
  );
};

export default Dashboard;
