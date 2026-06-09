import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BrandProvider from "./provider/BrandProvider.jsx";
import ThemeProvider from "./provider/ThemeProvider.jsx";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrandProvider>
        {/* <App /> */}
        <AuthProvider>
          <Navbar />
          <Dashboard />
        </AuthProvider>
      </BrandProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
