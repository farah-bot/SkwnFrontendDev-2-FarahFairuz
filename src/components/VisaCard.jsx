import React from "react";
import "../styles/VisaCard.css";
import useWindowSize from "../hooks/useWindowSize";

const VisaCard = ({ cardNumber, name, type, variant = "blue" }) => {
  const { isMobile } = useWindowSize();

  const formatCardNumber = (number) => {
    return number.match(/.{1,4}/g).join(" ");
  };

  return (
    <div
      className={`visa-card ${isMobile ? "visa-card-mobile" : ""} ${
        variant === "white" ? "visa-card-white" : ""
      }`}
    >
      <div className="card-top">
        <div
          className={`card-chip-icon ${variant === "white" ? "chip-blue" : ""}`}
        ></div>
        <span className="card-type">{type}</span>
      </div>
      <div className="card-details">
        <div className="card-number">{formatCardNumber(cardNumber)}</div>
        <div className="card-bottom">
          <div className="card-name">{name}</div>
          <span className="visa-logo">VISA</span>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
