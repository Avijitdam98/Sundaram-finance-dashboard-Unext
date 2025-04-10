import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFD, markMatured } from "../redux/fdSlice";
import { addNotification } from "../redux/notificationSlice";

const FdTrackerRedux = () => {
  const [form, setForm] = useState({
    id: "",
    amount: "",
    tenure: "",
    interest: "",
  });
  const fdList = useSelector((state) => state.fd);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(addFD(form));
    dispatch(addNotification(`New FD created with amount ₹${form.amount}`));
    setForm({ id: "", amount: "", tenure: "", interest: "" });
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto", fontFamily: "'Segoe UI', 'Roboto', sans-serif" }}>
      <h2 style={{ color: "#0d47a1", fontWeight: "bold", textAlign: "center" }}>FD Tracker</h2>
      <div style={{ marginBottom: "1rem" }}>
        <input
          style={{ padding: "0.5rem", marginRight: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          placeholder="ID"
          onChange={(e) => setForm({ ...form, id: e.target.value })}
        />
        <input
          style={{ padding: "0.5rem", marginRight: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          placeholder="Amount"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <input
          style={{ padding: "0.5rem", marginRight: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          placeholder="Tenure (months)"
          onChange={(e) => setForm({ ...form, tenure: e.target.value })}
        />
        <input
          style={{ padding: "0.5rem", marginRight: "0.5rem", borderRadius: "5px", border: "1px solid #ccc" }}
          placeholder="Interest Rate"
          onChange={(e) => setForm({ ...form, interest: e.target.value })}
        />
        <button
          onClick={handleAdd}
          style={{ padding: "0.5rem 1rem", borderRadius: "5px", backgroundColor: "#0d47a1", color: "white", border: "none", cursor: "pointer" }}
        >
          Add FD
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {fdList.map((fd) => (
          <li key={fd.id} style={{ marginBottom: "0.5rem", padding: "0.5rem", border: "1px solid #ccc", borderRadius: "5px" }}>
            ₹{fd.amount} for {fd.tenure} months @ {fd.interest}% - {fd.status}
            {fd.status === "Active" && (
              <button
                onClick={() => {
                  dispatch(markMatured(fd.id));
                  dispatch(addNotification(`FD ${fd.id} marked as matured`));
                }}
                style={{ marginLeft: "1rem", padding: "0.5rem 1rem", borderRadius: "5px", backgroundColor: "#0d47a1", color: "white", border: "none", cursor: "pointer" }}
              >
                Mark Matured
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FdTrackerRedux;

