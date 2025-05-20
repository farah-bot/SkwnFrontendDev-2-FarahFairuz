import React from "react";
import "../styles/VisaCard.css";
import useWindowSize from "../hooks/useWindowSize";

const VisaCard = ({ cardNumber, name, type }) => {
  const { isMobile, isTablet } = useWindowSize();

  const formatCardNumber = (number) => {
    return number.match(/.{1,4}/g).join(" ");
  };

  return (
    <div
      className={`visa-card ${isMobile ? "visa-card-mobile" : ""} ${
        isTablet ? "visa-card-tablet" : ""
      }`}
    >
      <div className="card-chip-icon"></div>
      <div className="card-details">
        <div className="card-number">{formatCardNumber(cardNumber)}</div>
        <div className="card-name">{name}</div>
      </div>
      <div className="card-brand">
        <span className="card-type">{type}</span>
        <span className="visa-logo">VISA</span>
      </div>
    </div>
  );
};

export default VisaCard;
