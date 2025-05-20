import React from "react";
import "../styles/VisaCard.css";
import useWindowSize from "../hooks/useWindowSize";

const VisaCard = ({ cardNumber, name, type }) => {
  const { isMobile } = useWindowSize();

  const formatCardNumber = (number) => {
    return number.match(/.{1,4}/g).join(" ");
  };

  return (
    <div className={`visa-card ${isMobile ? "visa-card-mobile" : ""}`}>
      <div className="card-top">
        <div className="card-chip-icon"></div>
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
