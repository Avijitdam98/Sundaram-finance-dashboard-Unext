import React, { useState } from "react";

export default function RDTracker() {
  const [monthly, setMonthly] = useState(1000);
  const [months, setMonths] = useState(12);

  const handleIncrease = () => setMonthly((prev) => prev + 500);
  const handleDecrease = () =>
    setMonthly((prev) => (prev > 500 ? prev - 500 : 0));

  const totalInvestment = monthly * months;
  const maturity = totalInvestment * (1 + 0.06 * (months / 12));

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>RD Contribution Tracker</h2>

        <div style={styles.section}>
          <p style={styles.label}>Monthly Contribution</p>
          <div style={styles.buttonGroup}>
            <button onClick={handleDecrease} style={styles.adjustBtn}>
              −
            </button>
            <span style={styles.value}>₹{monthly}</span>
            <button onClick={handleIncrease} style={styles.adjustBtn}>
              +
            </button>
          </div>
        </div>

        <div style={styles.section}>
          <p style={styles.label}>Tenure: {months} months</p>
        </div>

        <div style={styles.section}>
          <p style={styles.result}>Total Investment: ₹{totalInvestment}</p>
          <h4 style={styles.maturity}>
            Estimated Maturity: ₹{maturity.toFixed(2)}
          </h4>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#f4f7fb",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
    textAlign: "center",
  },
  heading: {
    color: "#003366",
    marginBottom: "1.5rem",
  },
  section: {
    marginBottom: "1.5rem",
  },
  label: {
    fontSize: "1rem",
    fontWeight: "500",
    marginBottom: "0.5rem",
    color: "#333",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
  },
  adjustBtn: {
    padding: "0.5rem 1rem",
    fontSize: "1.5rem",
    fontWeight: "bold",
    backgroundColor: "#00509e",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  value: {
    fontSize: "1.2rem",
    fontWeight: "bold",
    color: "#222",
  },
  result: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "0.5rem",
  },
  maturity: {
    color: "#008000",
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
};
