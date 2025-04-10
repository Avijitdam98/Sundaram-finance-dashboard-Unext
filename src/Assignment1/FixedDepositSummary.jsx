import React, { useState } from "react";

function FixedDepositSummary({
  depositAmount,
  interestRate,
  tenure,
  maturityAmount,
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "1rem",
        borderRadius: "10px",
        maxWidth: "300px",
      }}
    >
      <h3>Fixed Deposit Summary</h3>
      <p>
        <strong>Deposit Amount:</strong> ₹{depositAmount}
      </p>
      {showDetails && (
        <>
          <p>
            <strong>Interest Rate:</strong> {interestRate}%
          </p>
          <p>
            <strong>Tenure:</strong> {tenure} years
          </p>
          <p>
            <strong>Maturity Amount:</strong> ₹{maturityAmount}
          </p>
        </>
      )}
      <button onClick={() => setShowDetails((prev) => !prev)}>
        {showDetails ? "Summary View" : "Detailed View"}
      </button>
    </div>
  );
}

export default FixedDepositSummary;
