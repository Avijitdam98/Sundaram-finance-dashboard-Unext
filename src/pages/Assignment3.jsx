// pages/Assignment3.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Assignment3/Home";
import FDCalculator from "../Assignment3/FDCalculator";
import RDSummary from "../Assignment3/RDSummary";
import InvestmentHistory from "../Assignment3/InvestmentHistory";
import InvestmentDetail from "../Assignment3/InvestmentDetail";
import CreateFD from "../Assignment3/CreateFD";
import CreateRD from "../Assignment3/CreateRD";
import Support from "../Assignment3/Support";
import Dashboard from "../Assignment3/Dashboard";



export default function Assignment3() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/fixed-deposit" element={<FDCalculator />} />
      <Route path="/recurring-deposit" element={<RDSummary />} />
      <Route path="/investment-history" element={<InvestmentHistory />} />
      <Route path="/investment/:id" element={<InvestmentDetail />} />
      <Route path="/create-fd" element={<CreateFD />} />
      <Route path="/create-rd" element={<CreateRD />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}
