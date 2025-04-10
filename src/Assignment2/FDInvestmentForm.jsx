import React, { useState } from "react";

function FDInvestmentForm() {
  const [depositAmount, setDepositAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [maturityAmount, setMaturityAmount] = useState(null);

  const interestRate = 6.5;

  const handleSubmit = (e) => {
    e.preventDefault();
    const maturity =
      Number(depositAmount) +
      (Number(depositAmount) * interestRate * Number(tenure)) / 100;
    setMaturityAmount(maturity.toFixed(2));
  };

  return (
    <div>
      <h3>FD Investment Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Deposit Amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Tenure (years)"
          value={tenure}
          onChange={(e) => setTenure(e.target.value)}
          required
        />
        <input type="text" value={`${interestRate}%`} readOnly />
        <button type="submit">Calculate</button>
      </form>
      {maturityAmount && <p>Maturity Amount: ₹{maturityAmount}</p>}
    </div>
  );
}

export default FDInvestmentForm;
