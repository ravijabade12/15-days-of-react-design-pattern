import React from "react";
import { useAuth } from "../hook/useAuth";

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  return (
    <div>
      <h1>Dashboard</h1>
      {isAuthenticated && <p>Welcome, {user.name}!</p>}
    </div>
  );
};

export default Dashboard;
