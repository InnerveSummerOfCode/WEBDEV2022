import React from "react";
import "./card.css";

const Card = ({ icon, heading, subHeading }) => {
  return (
    <div className="features__card">
      <div className="features__icon">
        <img src={icon} alt={heading} className="floating" />
      </div>
      <div className="features__details">
        <h2> {heading} </h2>
        <p> {subHeading} </p>
      </div>
    </div>
  );
};

export default Card;
