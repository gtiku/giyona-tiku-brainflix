import React from "react";
import "./Button.scss";

const Button = ({ icon, text, className }) => {
  return (
    <button type="submit" className={`button ${className}`}>
      <img src={icon} alt={text} className="button__icon" />
      <p className="button__text">{text}</p>
    </button>
  );
};

export default Button;
