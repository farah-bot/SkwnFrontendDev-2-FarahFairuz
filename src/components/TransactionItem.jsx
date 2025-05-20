import React from "react";
// import "../styles/TransactionItem.css";

const TransactionItem = ({ transaction }) => {
  const { type, amount, location, date, time, isPositive } = transaction;

  const getIconClass = () => {
    return isPositive
      ? "transaction-icon deposit"
      : "transaction-icon withdraw";
  };

  const getAmountClass = () => {
    return isPositive
      ? "transaction-amount positive"
      : "transaction-amount negative";
  };

  return (
    <div className="transaction-item">
      <div className={getIconClass()}>{isPositive ? "↗" : "↘"}</div>
      <div className="transaction-info">
        <div className="transaction-main">
          <p className="transaction-type">{type}</p>
          <p className={getAmountClass()}>{amount}</p>
        </div>
        <div className="transaction-details">
          <p className="transaction-location">
            <span className="location-icon">📍</span> {location}
          </p>
          <p className="transaction-time">{time}</p>
        </div>
        <p className="transaction-date">{date}</p>
      </div>
    </div>
  );
};

export default TransactionItem;
