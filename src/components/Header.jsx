import React from "react";
import "../styles/Header.css";
import useWindowSize from "../hooks/useWindowSize";

const Header = ({ name, userImage }) => {
  const { isMobile, isTablet } = useWindowSize();

  return (
    <div
      className={`header ${isMobile ? "header-mobile" : ""} ${
        isTablet ? "header-tablet" : ""
      }`}
    >
      <div className="greeting">
        <p style={{ marginBottom: 4 }}>Hello,</p>
        <h2 style={{ marginTop: 0 }}>{name}!</h2>
      </div>
      {userImage && (
        <div className="profile-pic">
          <img src={userImage} alt="Profile" />
        </div>
      )}
    </div>
  );
};

export default Header;
