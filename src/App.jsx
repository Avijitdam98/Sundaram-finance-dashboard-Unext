import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Assignment1Page from "./pages/Assignment1Page";
import Assignment2Page from "./pages/Assignment2Page";
import Assignment3 from "./pages/Assignment3";
import Assignment4Page from "./pages/Assignment4Page";
import Assignment5Page from "./pages/Assignment5Page";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/assignment1" element={<Assignment1Page />} />
        <Route path="/assignment2" element={<Assignment2Page />} />
        <Route path="/assignment3/*" element={<Assignment3 />} />{" "}
        <Route path="/assignment4/*" element={<Assignment4Page />} />
        <Route path="/assignment5" element={<Assignment5Page />} />
      </Routes>
    </Router>
  );
}

export default App;
