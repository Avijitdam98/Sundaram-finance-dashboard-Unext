import React from "react";

function CustomerProfile({ name, totalFDs, totalRDs, totalInvestment }) {
  return (
    <div
      style={{
        border: "1px solid navy",
        padding: "1rem",
        borderRadius: "10px",
        maxWidth: "300px",
      }}
    >
      <h3>Customer Profile</h3>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Total FDs:</strong> ₹{totalFDs}
      </p>
      <p>
        <strong>Total RDs:</strong> ₹{totalRDs}
      </p>
      <p>
        <strong>Total Investment Value:</strong> ₹{totalInvestment}
      </p>
    </div>
  );
}

export default CustomerProfile;
