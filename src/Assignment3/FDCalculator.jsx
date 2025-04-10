import React from "react";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    padding: "2rem",
  },
  heading: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#0d47a1",
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
    marginBottom: "1rem",
  },
  subText: {
    fontSize: "1.2rem",
    color: "#1a237e",
    marginTop: "0.5rem",
  },
};

export default function FDCalculator() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>FD Calculator – Sundaram Finance</h2>
      <p style={styles.subText}>
        Plan your fixed deposit investment with ease and accuracy.
      </p>
    </div>
  );
}
