import React from "react";
import "./Button.scss";

const Button = ({ icon, text, className, type }) => {
  return (
    <button type={type} className={`icon-button ${className}`}>
      <img src={icon} alt={text} className="icon-button__icon" />
      <p className="icon-button__text">{text}</p>
    </button>
  );
};

export default Button;
