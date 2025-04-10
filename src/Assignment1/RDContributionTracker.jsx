import React, { useState } from "react";

function RDContributionTracker({ tenure }) {
  const [monthlyContribution, setMonthlyContribution] = useState(1000);

  const totalInvested = monthlyContribution * tenure * 12;
  const estimatedMaturity = totalInvested + totalInvested * 0.1; 

  return (
    <div
      style={{
        border: "1px solid green",
        padding: "1rem",
        borderRadius: "10px",
        maxWidth: "350px",
      }}
    >
      <h3>RD Contribution Tracker</h3>
      <label>Monthly Contribution (₹): </label>
      <input
        type="number"
        value={monthlyContribution}
        onChange={(e) => setMonthlyContribution(Number(e.target.value))}
      />
      <p>
        <strong>Tenure:</strong> {tenure} years
      </p>
      <p>
        <strong>Total Invested:</strong> ₹{totalInvested}
      </p>
      <p>
        <strong>Estimated Maturity:</strong> ₹{estimatedMaturity.toFixed(2)}
      </p>
    </div>
  );
}

export default RDContributionTracker;
