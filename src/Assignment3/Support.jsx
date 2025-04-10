
import React from "react";
import { FaPhone } from "react-icons/fa";

export default function Support() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#0d47a1", marginBottom: "1rem" }}>
        Customer Support
      </h2>
      <p style={{ fontSize: "1.2rem", color: "#1a237e", marginBottom: "2rem" }}>
        If you have any questions, contact Sundaram Finance support.
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <FaPhone style={{ fontSize: "2rem", color: "#0d47a1" }} />
        <a href="tel:+91 44 2852 1313" style={{ textDecoration: "none", color: "#0d47a1" }}>
          +91 44 2852 1313
        </a>
      </div>
    </div>
  );
}
