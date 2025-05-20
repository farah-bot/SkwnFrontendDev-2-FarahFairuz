import React from "react";
import TransactionItem from "./TransactionItem";
// import "../styles/TransactionHistory.css";

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="transaction-history">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionHistory;
