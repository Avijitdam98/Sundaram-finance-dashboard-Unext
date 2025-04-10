import React, { useState } from 'react';

function RDPlanForm() {
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [tenure, setTenure] = useState('');
  const [bankName, setBankName] = useState('');
  const [summary, setSummary] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalInvested = monthlyContribution * tenure;
    const estimatedMaturity = totalInvested + totalInvested * 0.1;
    setSummary({
      monthlyContribution,
      tenure,
      bankName,
      totalInvested,
      estimatedMaturity,
    });
  };

  return (
    <div>
      <h3>RD Plan Creation</h3>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Monthly Contribution" value={monthlyContribution} onChange={(e) => setMonthlyContribution(e.target.value)} required />
        <input type="number" placeholder="Tenure (months)" value={tenure} onChange={(e) => setTenure(e.target.value)} required />
        <input type="text" placeholder="Bank Name" value={bankName} onChange={(e) => setBankName(e.target.value)} required />
        <button type="submit">Submit</button>
      </form>

      {summary && (
        <div>
          <h4>RD Summary</h4>
          <p>Bank: {summary.bankName}</p>
          <p>Total Invested: ₹{summary.totalInvested}</p>
          <p>Estimated Maturity: ₹{summary.estimatedMaturity.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}

export default RDPlanForm;
