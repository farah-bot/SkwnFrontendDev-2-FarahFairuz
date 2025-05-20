import React from "react";
import Header from "../components/Header";
import VisaCard from "../components/VisaCard";
import ServiceMenu from "../components/ServiceMenu";
import TransactionHistory from "../components/TransactionHistory";
import Navigation from "../components/Navigation";

const HomePage = () => {
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
  ];

  return (
    <div className="home-page">
      <Header name="Aurellia" userImage="/images/download-1.jpg" />

      <section className="cards-section">
        <div className="section-header">
          <h2>Your Visa</h2>
          <span className="see-all">See All</span>
        </div>
        <div
          className="cards-slider"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            overflowX: "auto",
            paddingBottom: "10px",
          }}
        >
          <VisaCard
            cardNumber="4000512721232018"
            name="Aurellia"
            type="Premium"
          />
          <VisaCard
            cardNumber="1234567812345678"
            name="Aurellia"
            type="Standard"
            variant="white"
          />
          <button
            style={{
              minWidth: "360px",
              height: "200px",
              borderRadius: "16px",
              border: "2px dashed #42a5f5",
              backgroundColor: "transparent",
              color: "#42a5f5",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            + Add Visa Card
          </button>
        </div>
      </section>

      <ServiceMenu />

      <section className="activity-section">
        <TransactionHistory transactions={transactions} />
      </section>

      <Navigation />
    </div>
  );
};

export default HomePage;
