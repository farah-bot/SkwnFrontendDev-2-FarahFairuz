import React from "react";
// import "../styles/Header.css";
// import profilePlaceholder from "../assets/foto.jpg";

const Header = ({ name, hasProfilePic }) => {
  return (
    <div className="header">
      <div className="greeting">
        <p>Hello,</p>
        <h1>{name}!</h1>
      </div>
      {hasProfilePic && (
        <div className="profile-pic">
          {/* <img src={profilePlaceholder} alt="Profile" /> */}
        </div>
      )}
    </div>
  );
};

export default Header;
