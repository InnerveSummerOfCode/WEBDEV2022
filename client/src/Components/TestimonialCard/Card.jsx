import React from "react";
import "./card.css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const Card = ({ data }) => {
  return (
    <div className="testimonial__card">
      <div className="testimonial__profile">
        <img src={data.avatar} alt="USER" />
        <p> {data.name} </p>
      </div>
      <div className="testimonial__content"> <FaQuoteLeft className="icon"/> {data.content} <FaQuoteRight className="icon"/></div>
    </div>
  );
};

export default Card;
