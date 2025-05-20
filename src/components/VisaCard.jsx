import "../styles/VisaCard.css";

const VisaCard = ({ cardNumber, name, type }) => {
  const formatCardNumber = (number) => {
    return number.match(/.{1,4}/g).join(" ");
  };

  return (
    <div className="visa-card">
      <div className="card-chip-icon"></div>
      <div className="card-details">
        <div className="card-number">{formatCardNumber(cardNumber)}</div>
        <div className="card-name">{name}</div>
      </div>
      <div className="card-brand">
        <span className="card-type">{type}</span>
        <span className="visa-logo">VISA</span>
      </div>
    </div>
  );
};

export default VisaCard;
