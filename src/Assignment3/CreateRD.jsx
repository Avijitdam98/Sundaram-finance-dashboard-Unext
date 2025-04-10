import React from "react";

export default function CreateRD() {
  return (
    <div>
      <h2>Open Recurring Deposit</h2>
      <form>
        <label>Monthly Contribution: </label>
        <input type="number" />
        <br />
        <label>Tenure (Months): </label>
        <input type="number" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
