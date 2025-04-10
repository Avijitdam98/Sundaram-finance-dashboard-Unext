import React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.2rem",
    color: "#0d47a1",
    marginBottom: "1rem",
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  },
};

export default function RDSummary() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>RD Summary - Sundaram Finance</h2>
    </div>
  );
}
