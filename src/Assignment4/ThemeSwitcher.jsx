import React, { useState } from "react";

export default function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  const themeStyle = {
    backgroundColor: darkMode ? "#1a1a1a" : "#f4f7fb",
    color: darkMode ? "#ffffff" : "#003366",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.4s ease",
  };

  const cardStyle = {
    backgroundColor: darkMode ? "#2c2c2c" : "#ffffff",
    color: darkMode ? "#ffffff" : "#003366",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: darkMode
      ? "0 0 20px rgba(255, 255, 255, 0.1)"
      : "0 4px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px",
    transition: "all 0.4s ease",
  };

  const buttonStyle = {
    marginTop: "1.5rem",
    padding: "0.75rem 1.5rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "none",
    backgroundColor: darkMode ? "#00509e" : "#003366",
    color: "#fff",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <div style={themeStyle}>
      <div style={cardStyle}>
        <h2>Investment Dashboard</h2>
        <p>Toggle the theme to switch views</p>
        <button onClick={toggleTheme} style={buttonStyle}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}
