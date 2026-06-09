import { useContext } from "react";
import { AuthContext } from "../context";

const useAuth = () => {
  const { user, setUser, isAuthenticated, login, logout } =
    useContext(AuthContext);

  return { user, setUser, isAuthenticated, login, logout };
};

export { useAuth };
