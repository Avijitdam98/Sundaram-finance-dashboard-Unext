import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f4f7fa",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "2rem",
        color: "#1a237e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          backgroundColor: "#ffffff",
          padding: "2.5rem",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/04/Sundaram_Finance_Limited_Logo.jpg"
          alt="Sundaram Finance Logo"
          style={{
            height: "60px",
            marginBottom: "1.5rem",
            objectFit: "contain",
          }}
        />

        <img
          src="https://avatars.githubusercontent.com/u/84221186?v=4"
          alt="Avijit Dam"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1rem",
            border: "3px solid #1a237e",
          }}
        />

        <h1
          style={{
            marginBottom: "0.5rem",
            color: "#1a237e",
            fontSize: "2rem",
            fontWeight: 700,
          }}
        >
          Welcome, Avijit!
        </h1>
        <p
          style={{
            marginBottom: "2rem",
            fontSize: "1.1rem",
            color: "#5c6bc0",
          }}
        >
          Explore my assignments below
        </p>

        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <Link to="/assignment1" style={cardStyle("#3949ab")}>
            Assignment 1
          </Link>
          <Link to="/assignment2" style={cardStyle("#1e88e5")}>
            Assignment 2
          </Link>
          <Link to="/assignment3" style={cardStyle("#43a047")}>
            Assignment 3
          </Link>
          <Link to="/assignment4" style={cardStyle("#ff7043")}>
            Assignment 4
          </Link>
          <Link to="/assignment5" style={cardStyle("#8e24aa")}>
            Assignment 5
          </Link>{" "}
          {/* ✅ Added Assignment 5 */}
        </div>
      </div>
    </div>
  );
};

const cardStyle = (bgColor) => ({
  padding: "1.5rem",
  borderRadius: "12px",
  backgroundColor: bgColor,
  color: "#fff",
  textDecoration: "none",
  textAlign: "center",
  fontWeight: "bold",
  transition: "transform 0.3s, box-shadow 0.3s",
  boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
  cursor: "pointer",
  fontSize: "1.1rem",
  letterSpacing: "0.5px",
  textTransform: "uppercase",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export default Dashboard;
