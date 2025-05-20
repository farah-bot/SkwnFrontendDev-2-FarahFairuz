import React from "react";
import TransactionItem from "./TransactionItem";
import "../styles/TransactionHistory.css";

const TransactionHistory = ({
  transactions,
  title = "History",
  showCategory = false,
}) => {
  return (
    <div className="transaction-history">
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        <div className="right-actions">
          {showCategory && (
            <div className="category-dropdown">
              <span>Category</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#555"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          <a href="#" className="see-all">
            See All
          </a>
        </div>
      </div>
      <div className="transaction-list">
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={index}
            type={transaction.type}
            amount={transaction.amount}
            location={transaction.location}
            date={transaction.date}
            time={transaction.time}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
