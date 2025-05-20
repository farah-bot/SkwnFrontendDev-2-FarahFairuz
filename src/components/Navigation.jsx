import React from "react";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="bottom-navigation">
      <div className="nav-item active">
        <div className="nav-icon home-icon"></div>
        <div className="nav-dot"></div>
      </div>
      <div className="nav-item">
        <div className="nav-icon history-icon"></div>
      </div>
      <div className="nav-item">
        <div className="nav-icon message-icon"></div>
      </div>
      <div className="nav-item">
        <div className="nav-icon profile-icon"></div>
      </div>
    </nav>
  );
};

export default Navigation;
