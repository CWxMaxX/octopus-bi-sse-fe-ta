import React from "react";
import "./CommonLayout.css";

const CommonLayout = ({ children, drawer }) => {
  return (
    <div className="common-layout-container">
      <div className="drawer-container">{drawer}</div>
      <div className="dashboard-app-container">
        <div className="dashboard-app-content">{children}</div>
      </div>
    </div>
  );
};

export default CommonLayout;
