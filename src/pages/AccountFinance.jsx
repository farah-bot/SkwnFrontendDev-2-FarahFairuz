import React from "react";
import Statistics from "../components/Statistics";
import TransactionHistory from "../components/TransactionHistory";
import "../styles/AccountFinance.css";

const AccountFinance = () => {
  const transactions = [
    {
      id: 1,
      type: "Deposit",
      amount: "Rp15.510.000,-",
      date: "11 March 2022",
      location: "Bank Mandiri ATM",
      time: "11.21 AM",
      isDeposit: true,
    },
    {
      id: 2,
      type: "Withdraw",
      amount: "Rp15.510.000,-",
      date: "11 March 2022",
      location: "Bank Mandiri ATM",
      time: "11.22 AM",
      isDeposit: false,
    },
    {
      id: 3,
      type: "Withdraw",
      amount: "Rp15.510.000,-",
      date: "11 March 2022",
      location: "Bank Mandiri ATM",
      time: "11.23 AM",
      isDeposit: false,
    },
  ];

  const months = ["Jan", "Feb", "Mar", "Apr", "May"];
  const values = [2500000, 5000000, 3000000, 4500000, 5000000];

  return (
    <div className="account-finance-page">
      <div className="finance-header">
        <div className="back-button">
          <span className="back-icon"></span>
        </div>
        <h1>Account Finance</h1>
        <div className="help-icon-container">
          <span className="help-icon"></span>
        </div>
      </div>

      <div className="account-summary">
        <div className="balance">
          <h2>Rp. 25.550.000,-</h2>
          <p className="date">12 June 2022</p>
        </div>
      </div>

      <Statistics months={months} values={values} />

      <div className="transaction-section">
        <div className="section-header">
          <h2>History</h2>
          <div className="category-dropdown">
            Category <span className="dropdown-icon"></span>
          </div>
        </div>
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
};

export default AccountFinance;
