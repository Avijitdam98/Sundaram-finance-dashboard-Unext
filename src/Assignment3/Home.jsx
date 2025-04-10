import React from "react";

export default function Home() {
  return (
    <div
      style={{
        padding: "2rem",
        background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
        fontFamily: "'Segoe UI', 'Roboto', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <h2
        style={{
          fontSize: "2.2rem",
          fontWeight: 700,
          color: "#1a237e",
          marginBottom: "1rem",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        Welcome to Royal Sundaram Finance
      </h2>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#1a237e",
          marginTop: "0.5rem",
        }}
      >
        Your trusted partner for all your Fixed Deposit and Recurring Deposit
        needs.
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          color: "#1a237e",
          marginTop: "0.5rem",
        }}
      >
        Experience the Royal Sundaram advantage today!
      </p>
    </div>
  );
}
