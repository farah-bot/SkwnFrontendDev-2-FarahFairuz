import React from "react";
import "../styles/AccountSummary.css";

const AccountSummary = ({ balance, date }) => {
  return (
    <div className="account-summary">
      <h2 className="balance">{balance}</h2>
      <p className="date">{date}</p>
    </div>
  );
};

export default AccountSummary;
