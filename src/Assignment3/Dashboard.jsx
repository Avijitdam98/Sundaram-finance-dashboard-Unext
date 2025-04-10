import React, { useState } from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2rem",
    gap: "1rem",
    background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#0d47a1",
    marginBottom: "1rem",
    textAlign: "center",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
  },
  description: {
    fontSize: "1.2rem",
    color: "#1a237e",
    marginBottom: "2rem",
  },
  links: {
    listStyleType: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  },
  linkItem: {
    textDecoration: "none",
    color: "#fff",
    backgroundColor: "#0d47a1",
    padding: "0.8rem 1.5rem",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    display: "inline-block",
    minWidth: "250px",
    textAlign: "center",
  },
  linkItemHover: {
    backgroundColor: "#0a367d",
    transform: "scale(1.05)",
  },
};

export default function Dashboard() {
  const [hovered, setHovered] = useState(null);

  const links = [
    { path: "/assignment3/home", label: "Home" },
    { path: "/assignment3/fixed-deposit", label: "FD Calculator" },
    { path: "/assignment3/recurring-deposit", label: "RD Summary" },
    { path: "/assignment3/investment-history", label: "Investment History" },
    { path: "/assignment3/create-fd", label: "Create Fixed Deposit" },
    { path: "/assignment3/create-rd", label: "Open Recurring Deposit" },
    { path: "/assignment3/support", label: "Customer Support" },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>User Dashboard – Sundaram Finance</h2>
      <p style={styles.description}>
        Welcome! Navigate through your investments below:
      </p>
      <ul style={styles.links}>
        {links.map((link, index) => (
          <li key={link.path}>
            <Link
              to={link.path}
              style={{
                ...styles.linkItem,
                ...(hovered === index ? styles.linkItemHover : {}),
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
