import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearNotifications } from "../redux/notificationSlice";

const NotificationBar = () => {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        background: "#f0f4f8",
        padding: "1rem",
        marginBottom: "1rem",
        borderRadius: "14px",
        boxShadow: "0 6px 14px rgba(0, 0, 0, 0.08)",
      }}
    >
      <h4
        style={{
          fontSize: "1.4rem",
          fontWeight: 700,
          color: "#0d47a1",
          marginBottom: "0.5rem",
        }}
      >
        Notifications
      </h4>
      {notifications.map((note) => (
        <p key={note.id} style={{ fontSize: "1.2rem", color: "#1a237e" }}>
          🔔 {note.message}
        </p>
      ))}
      {notifications.length > 0 && (
        <button
          style={{
            background: "#0d47a1",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => dispatch(clearNotifications())}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default NotificationBar;

