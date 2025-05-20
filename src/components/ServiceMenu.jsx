import React from "react";
import "../styles/ServiceMenu.css";

const ServiceMenu = () => {
  const services = [
    { id: 1, name: "Card", icon: "card-icon" },
    { id: 2, name: "Finance", icon: "finance-icon" },
    { id: 3, name: "Top Up", icon: "topup-icon" },
    { id: 4, name: "Help", icon: "help-icon" },
  ];

  return (
    <div className="service-menu-container">
      <div className="service-menu-header">
        <h2>Services</h2>
        <span className="see-all">See All</span>
      </div>
      <div className="service-menu-items">
        {services.map((service) => (
          <div className="service-item" key={service.id}>
            <div className={`service-icon ${service.icon}`}></div>
            <span className="service-name">{service.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceMenu;
