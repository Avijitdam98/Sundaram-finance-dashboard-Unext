import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRD, updateRD } from "../redux/rdSlice";
import { addNotification } from "../redux/notificationSlice";

const RdTrackerRedux = () => {
  const [form, setForm] = useState({ id: "", amount: "" });
  const rdList = useSelector((state) => state.rd);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (form.id && form.amount) {
      dispatch(addRD(form));
      dispatch(addNotification(`New RD added with ₹${form.amount} monthly`));
      setForm({ id: "", amount: "" });
    }
  };

  const handleUpdate = (id, newAmt) => {
    dispatch(updateRD({ id, amount: newAmt }));
    dispatch(addNotification(`RD ${id} updated to ₹${newAmt}`));
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "3rem auto",
        padding: "2rem",
        borderRadius: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        fontFamily: "'Segoe UI', sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#2E3A59",
          marginBottom: "1.5rem",
        }}
      >
        RD Investment Tracker
      </h2>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          value={form.id}
          placeholder="RD ID"
          onChange={(e) => setForm({ ...form, id: e.target.value })}
          style={{
            flex: 1,
            padding: "0.6rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outlineColor: "#007bff",
          }}
        />
        <input
          value={form.amount}
          placeholder="Monthly ₹ Amount"
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
          style={{
            flex: 1,
            padding: "0.6rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outlineColor: "#007bff",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: "0.6rem 1rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: 0 }}>
        {rdList.map((rd) => (
          <li
            key={rd.id}
            style={{
              backgroundColor: "#f8f9fa",
              padding: "1rem",
              marginBottom: "0.8rem",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderLeft: "4px solid #007bff",
            }}
          >
            <div>
              <strong style={{ color: "#2E3A59" }}>{rd.id}</strong>: ₹
              {rd.amount}/month
            </div>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => handleUpdate(rd.id, parseInt(rd.amount) + 500)}
                style={{
                  padding: "0.4rem 0.7rem",
                  backgroundColor: "#28a745",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                +500
              </button>
              <button
                onClick={() => handleUpdate(rd.id, parseInt(rd.amount) - 500)}
                style={{
                  padding: "0.4rem 0.7rem",
                  backgroundColor: "#dc3545",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                -500
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RdTrackerRedux;
