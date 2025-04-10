import React from "react";

const Home5 = () => {
  const containerStyle = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f6f8",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  };

  const cardStyle = {
    padding: "2rem 3rem",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    maxWidth: "600px",
    width: "90%",
  };

  const titleStyle = {
    fontSize: "1.8rem",
    marginBottom: "1rem",
    color: "#333",
  };

  const textStyle = {
    fontSize: "1.2rem",
    color: "#666",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>
          Assignment 5: Redux-Based Investment Management
        </h2>
        <p style={textStyle}>
          Track your FD & RD with real-time notifications using Redux.
        </p>
      </div>
    </div>
  );
};

export default Home5;
