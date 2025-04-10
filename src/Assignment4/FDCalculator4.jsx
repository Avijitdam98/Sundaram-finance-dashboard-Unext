import React, { useState } from "react";

export default function FDCalculator4() {
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [maturity, setMaturity] = useState(null);

  const handleCalculate = () => {
    let interestRate = 0;
    if (tenure <= 12) interestRate = 0.05;
    else if (tenure <= 24) interestRate = 0.06;
    else interestRate = 0.07;

    const maturityAmount = amount * (1 + interestRate * (tenure / 12));
    setMaturity(maturityAmount.toFixed(2));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>FD Maturity Calculator</h2>
        <input
          type="number"
          placeholder="Deposit Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Tenure in months"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleCalculate} style={styles.button}>
          Calculate Maturity
        </button>
        {maturity && (
          <h4 style={styles.result}>Maturity Amount: ₹{maturity}</h4>
        )}
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
  input: {
    width: "100%",
    padding: "0.75rem",
    marginBottom: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  button: {
    width: "100%",
    padding: "0.75rem",
    backgroundColor: "#00509e",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  result: {
    marginTop: "1.5rem",
    color: "#008000",
    fontWeight: "bold",
  },
};
