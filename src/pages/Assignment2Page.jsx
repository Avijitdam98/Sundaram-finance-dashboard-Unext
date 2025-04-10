import React from "react";
import BankBranchSelector from "../Assignment2/BankBranchSelector";
import FDInvestmentForm from "../Assignment2/FDInvestmentForm";
import RDPlanForm from "../Assignment2/RDPlanForm";

const Assignment2Page = () => {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Sundaram Investment Plans</h1>

      <div style={styles.card}>
        <BankBranchSelector />
      </div>

      <div style={styles.card}>
        <FDInvestmentForm />
      </div>

      <div style={styles.card}>
        <RDPlanForm />
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: "2rem",
    minHeight: "100vh",
    background: "linear-gradient(to right, #e3f2fd, #f0f4ff)",
    fontFamily: "Segoe UI, Roboto, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  },
  title: {
    fontSize: "2.4rem",
    fontWeight: "bold",
    color: "#1a237e",
    marginBottom: "1rem",
    textAlign: "center",
    textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
  },
  card: {
    width: "100%",
    maxWidth: "960px",
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    border: "1px solid #c5cae9",
    transition: "all 0.3s ease",
  },
};

export default Assignment2Page;
