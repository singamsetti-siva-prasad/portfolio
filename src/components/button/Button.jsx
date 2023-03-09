import React from "react";
import "./button.css";

const Button = () => {
  return (
    <button className="glowing-btn">
      <a
        href="mailto: prasadsingamsetti12@gmail.com"
        style={{ color: "#808080" }}
      >
        <span className="glowing-txt">
          C<span className="faulty-letter">ON</span>TACT
        </span>
      </a>
    </button>
  );
};

export default Button;
