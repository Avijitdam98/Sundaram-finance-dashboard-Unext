import React from "react";
import Home5 from "../Assignment5/components/Home5";
import NotificationBar from "../Assignment5/components/NotificationBar";
import FdTrackerRedux from "../Assignment5/components/FdTrackerRedux";
import RdTrackerRedux from "../Assignment5/components/RdTrackerRedux";

const Assignment5Page = () => {
  return (
    <div style={{ padding: "2rem", background: "#f5f5f5", minHeight: "100vh" }}>
      <Home5 />
      <NotificationBar />
      <FdTrackerRedux/>
      <RdTrackerRedux />
    </div>
  );
};

export default Assignment5Page;
