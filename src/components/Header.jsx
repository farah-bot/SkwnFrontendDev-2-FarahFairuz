import React from "react";
import "../styles/Header.css";

const Header = ({ name, userImage }) => {
  return (
    <div className="header">
      <div className="greeting">
        <p>Hello,</p>
        <h2>{name}!</h2>
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
