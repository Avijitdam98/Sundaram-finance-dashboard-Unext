import React from "react";
import { Link } from "react-router-dom";


export default function Home4() {
  return (
    <div
      style={{
        padding: "2rem",
        background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
        fontFamily: "Segoe UI",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2rem",
      }}
    >

    
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <li>
          <Link
            to="/assignment4/fd-calculator"
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#0d47a1",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              marginBottom: "1rem",
            }}
          >
            FD Maturity Calculator
          </Link>
        </li>
        <li>
          <Link
            to="/assignment4/rd-tracker"
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#0d47a1",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              marginBottom: "1rem",
            }}
          >
            RD Contribution Tracker
          </Link>
        </li>
        <li>
          <Link
            to="/assignment4/theme-switcher"
            style={{
              textDecoration: "none",
              color: "#fff",
              backgroundColor: "#0d47a1",
              padding: "0.8rem 1.5rem",
              borderRadius: "8px",
              transition: "all 0.3s ease",
              marginBottom: "1rem",
            }}
          >
            Theme Switcher
          </Link>
        </li>
      </ul>
    </div>
  );
}
