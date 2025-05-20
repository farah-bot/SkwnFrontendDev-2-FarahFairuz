import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import AccountSummary from "../components/AccountSummary";
import Statistics from "../components/Statistics";
import TransactionHistory from "../components/TransactionHistory";
import "../styles/AccountFinance.css";

const AccountFinance = () => {
  const chartRef = useRef(null);

  const accountData = {
    balance: "Rp. 25.550.000,-",
    date: "12 June 2022",
  };

  const transactions = [
    {
      id: 1,
      type: "Deposit",
      amount: "Rp15.510.000,-",
      location: "Bank Mandiri ATM",
      date: "11 March 2022",
      time: "11.21 AM",
    },
    {
      id: 2,
      type: "Withdraw",
      amount: "Rp15.510.000,-",
      location: "Bank Mandiri ATM",
      date: "11 March 2022",
      time: "11.22 AM",
    },
    {
      id: 3,
      type: "Withdraw",
      amount: "Rp15.510.000,-",
      location: "Bank Mandiri ATM",
      date: "11 March 2022",
      time: "11.22 AM",
    },
  ];

  useEffect(() => {
    $(document).ready(function () {
      $(".account-balance").css("opacity", 0).animate(
        {
          opacity: 1,
        },
        800
        );
        
      $(".transaction-item").hover(
        function () {
          $(this).addClass("hover");
        },
        function () {
          $(this).removeClass("hover");
        }
      );

      $(".back-button").on("click", function () {
        $(".account-finance-page").fadeOut(200);
      });
    });
  }, []);

  return (
    <div className="account-finance-page">
      <header className="finance-header">
        <Link to="/" className="back-button">
          <i className="arrow-left">←</i>
        </Link>
        <h1 className="header-title">Account Finance</h1>
        <div className="help-icon">?</div>
      </header>

      <div className="container">
        <AccountSummary balance={accountData.balance} date={accountData.date} />

        <Statistics />

        <section className="history-section">
          <div className="section-header">
            <h2 className="section-title">History</h2>
            <div className="category-dropdown">
              Category <i className="dropdown-arrow">▼</i>
            </div>
          </div>

          <TransactionHistory transactions={transactions} />
        </section>
      </div>
    </div>
  );
};

export default AccountFinance;
