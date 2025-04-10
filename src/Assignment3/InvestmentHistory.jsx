import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    padding: "2rem",
    background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    minHeight: "100vh",
  },
  heading: {
    fontSize: "2.2rem",
    color: "#0d47a1",
    marginBottom: "1.5rem",
    textAlign: "center",
  },
  list: {
    listStyle: "none",
    padding: 0,
    maxWidth: "600px",
    margin: "0 auto",
  },
  listItem: {
    marginBottom: "1rem",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#0d47a1",
    padding: "0.7rem 1.2rem",
    borderRadius: "6px",
    display: "inline-block",
    transition: "background-color 0.3s, transform 0.2s",
  },
  linkHover: {
    backgroundColor: "#08306b",
    transform: "scale(1.05)",
  },
};

export default function InvestmentHistory() {
  const investments = [
    { id: 101, type: "FD", amount: 50000 },
    { id: 102, type: "RD", amount: 2000 },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Investment History</h2>
      <ul style={styles.list}>
        {investments.map((inv) => (
          <li key={inv.id} style={styles.listItem}>
            <Link
              to={`/assignment3/investment/${inv.id}`}
              style={styles.link}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#08306b")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#0d47a1")}
            >
              {inv.type} - ₹{inv.amount}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
