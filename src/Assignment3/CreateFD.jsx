// components/CreateFD.jsx
import React from "react";

export default function CreateFD() {
  return (
    <div style={{ padding: "2rem", maxWidth: "500px", margin: "auto" }}>
      <h2 style={{ color: "#0d47a1", fontWeight: "bold" }}>
        Create Fixed Deposit
      </h2>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <label style={{ fontSize: "1.2rem" }}>
          Deposit Amount:{" "}
          <input type="number" style={{ padding: "0.5rem", borderRadius: "5px" }} />
        </label>
        <br />
        <label style={{ fontSize: "1.2rem" }}>
          Tenure (Months):{" "}
          <input type="number" style={{ padding: "0.5rem", borderRadius: "5px" }} />
        </label>
        <br />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "5px",
            backgroundColor: "#0d47a1",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

