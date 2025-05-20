import React from "react";
import { CreditCard, DollarSign, ArrowUp, HelpCircle } from "lucide-react";
import "../styles/ServiceMenu.css";

const ServiceMenu = () => {
  const services = [
    { id: 1, name: "Card", icon: <CreditCard size={24} color="#4287f5" /> },
    {
      id: 2,
      name: "Finance",
      icon: <DollarSign size={24} color="#4287f5" />,
      link: "/account-finance",
    },
    { id: 3, name: "Top Up", icon: <ArrowUp size={24} color="#4287f5" /> },
    { id: 4, name: "Help", icon: <HelpCircle size={24} color="#4287f5" /> },
  ];

  return (
    <div className="service-menu-container">
      <div className="service-menu-header">
        <h2>Services</h2>
        <span className="see-all">See All</span>
      </div>
      <div className="service-menu-items">
        {services.map((service) => {
          const content = (
            <>
              <div className="service-icon">{service.icon}</div>
              <span className="service-name">{service.name}</span>
            </>
          );

          return service.link ? (
            <a href={service.link} className="service-item" key={service.id}>
              {content}
            </a>
          ) : (
            <div className="service-item" key={service.id}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceMenu;
