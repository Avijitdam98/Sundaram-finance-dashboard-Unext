// pages/Assignment4Page.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home4 from "../Assignment4/Home4";
import FDCalculator4 from "../Assignment4/FDCalculator4";
import RDTracker from "../Assignment4/RdTracker";
import ThemeSwitcher from "../Assignment4/ThemeSwitcher";

export default function Assignment4Page() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Assignment 4 – Sundaram Finance</h2>
      <Routes>
        <Route path="/" element={<Home4 />} />
        <Route path="fd-calculator" element={<FDCalculator4 />} />
        <Route path="rd-tracker" element={<RDTracker />} />
        <Route path="theme-switcher" element={<ThemeSwitcher />} />
      </Routes>
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    minHeight: "100vh",
    background: "linear-gradient(to bottom, #e3f2fd, #ffffff)",
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.4rem",
    fontWeight: "bold",
    color: "#0d47a1",
    marginBottom: "2rem",
  },
};
