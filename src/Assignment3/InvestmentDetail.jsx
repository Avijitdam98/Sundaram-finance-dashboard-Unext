import React from "react";
import { useParams } from "react-router-dom";

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
    background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.2rem",
    color: "#0d47a1",
    marginBottom: "1rem",
  },
  paragraph: {
    fontSize: "1.2rem",
    color: "#1a237e",
  },
};

export default function InvestmentDetail() {
  const { id } = useParams();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Investment Details – ID: {id}</h2>
      <p style={styles.paragraph}>
        Showing full details of FD/RD from Sundaram Finance.
      </p>
    </div>
  );
}
