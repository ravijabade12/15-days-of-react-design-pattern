import React from "react";
import { useAuth } from "../hook/useAuth";

const Navbar = () => {
  const { user, isAuthenticated, login, logout } = useAuth();

  return (
    <div>
      <h1>Navbar</h1>
      {isAuthenticated ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
};

export default Navbar;
