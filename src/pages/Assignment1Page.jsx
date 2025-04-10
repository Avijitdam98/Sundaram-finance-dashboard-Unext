import React from "react";
import BankComponent from "../Assignment1/BankComponent";
import CustomerProfile from "../Assignment1/CustomerProfile";
import FixedDepositSummary from "../Assignment1/FixedDepositSummary";
import RDContributionTracker from "../Assignment1/RDContributionTracker";

const Assignment1Page = () => (
  <div style={styles.page}>
    <header style={styles.header}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/04/Sundaram_Finance_Limited_Logo.jpg"
        alt="Sundaram Finance Logo"
        style={styles.logo}
      />
      <h1 style={styles.title}>Investment Dashboard</h1>
    </header>

    <div style={styles.card}>
      <BankComponent />
    </div>

    <div style={styles.card}>
      <CustomerProfile
        name="Avijit Dam"
        totalFDs={150000}
        totalRDs={50000}
        totalInvestment={200000}
      />
    </div>

    <div style={styles.card}>
      <FixedDepositSummary
        depositAmount={100000}
        interestRate={6.5}
        tenure={5}
        maturityAmount={138000}
      />
    </div>

    <div style={styles.card}>
      <RDContributionTracker tenure={3} />
    </div>
  </div>
);

const styles = {
  page: {
    padding: "2rem",
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #f0f4f8, #ffffff)",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "1rem",
    flexWrap: "wrap",
  },
  logo: {
    width: "160px",
    height: "auto",
  },
  title: {
    fontSize: "2.2rem",
    fontWeight: 700,
    color: "#0d47a1",
    textAlign: "center",
  },
  card: {
    width: "100%",
    maxWidth: "960px",
    backgroundColor: "#ffffff",
    padding: "2rem",
    borderRadius: "14px",
    boxShadow: "0 6px 14px rgba(0, 0, 0, 0.08)",
    borderLeft: "5px solid #0d47a1",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
};

export default Assignment1Page;
