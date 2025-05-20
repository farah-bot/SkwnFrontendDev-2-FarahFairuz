import React, { useEffect, useRef } from "react";
import $ from "jquery";
import "../styles/TransactionItem.css";

const TransactionItem = ({ type, amount, location, date, time }) => {
  const itemRef = useRef(null);

  useEffect(() => {
    $(itemRef.current).css("opacity", "0");
    $(itemRef.current).animate(
      {
        opacity: 1,
      },
      300
    );
  }, []);

  const isDeposit = type === "Deposit";

  return (
    <div className="transaction-item" ref={itemRef}>
      <div className={`transaction-icon ${isDeposit ? "deposit" : "withdraw"}`}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {isDeposit ? (
            <path
              d="M7 17L17 7M17 7H10M17 7V14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ) : (
            <path
              d="M17 7L7 17M7 17H14M7 17V10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </div>

      <div className="transaction-details">
        <div className="transaction-type">{type}</div>
        <div className="transaction-location">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
              stroke="#777"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="12"
              cy="10"
              r="3"
              stroke="#777"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{location}</span>
        </div>
      </div>

      <div className="transaction-right">
        <div
          className={`transaction-amount ${isDeposit ? "deposit" : "withdraw"}`}
        >
          {isDeposit ? "" : "-"}
          {amount}
        </div>
        <div className="transaction-datetime">
          <div className="transaction-date">{date}</div>
          <div className="transaction-time">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionItem;
