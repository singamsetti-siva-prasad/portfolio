import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card__info">
        <div className="title">Hello</div>
        <div className="title">I'm siva prasad</div>

        <div className="card__type">Full Stack Web Developer</div>
      </div>
      <div className="card__texture"></div>
    </div>
  );
};

export default Card;
