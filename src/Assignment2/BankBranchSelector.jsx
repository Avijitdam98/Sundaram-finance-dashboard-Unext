import React, { useState } from "react";

const sundaramBranches = {
  Chennai: {
    address: "123 Mount Road, Chennai, TN",
    code: "CHN001",
    ifsc: "SUND000CHN",
  },
  Coimbatore: {
    address: "45 MG Street, Coimbatore, TN",
    code: "CBE002",
    ifsc: "SUND000CBE",
  },
  Hyderabad: {
    address: "78 Banjara Hills, Hyderabad, TS",
    code: "HYD003",
    ifsc: "SUND000HYD",
  },
};

function BankBranchSelector() {
  const [selectedBranch, setSelectedBranch] = useState("");
  const branchDetails = sundaramBranches[selectedBranch];

  return (
    <div>
      <h3>Bank Branch Selector</h3>

      <p>
        <strong>Bank:</strong> Sundaram Finance
      </p>

      <label>Select Branch:</label>
      <select
        value={selectedBranch}
        onChange={(e) => setSelectedBranch(e.target.value)}
      >
        <option value="">-- Select Branch --</option>
        {Object.keys(sundaramBranches).map((branch) => (
          <option key={branch} value={branch}>
            {branch}
          </option>
        ))}
      </select>

      {branchDetails && (
        <div
          style={{
            marginTop: "1rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h4>Branch Details</h4>
          <p>
            <strong>Address:</strong> {branchDetails.address}
          </p>
          <p>
            <strong> Branch Code:</strong> {branchDetails.code}
          </p>
          <p>
            <strong> IFSC:</strong> {branchDetails.ifsc}
          </p>
        </div>
      )}
    </div>
  );
}

export default BankBranchSelector;
