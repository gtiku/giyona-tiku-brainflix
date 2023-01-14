import React from "react";
import "./Button.scss";

const Button = ({ icon, text }) => {
  return (
    <button>
      <img src={icon} alt={text} />
      <p>{text}</p>
    </button>
  );
};

export default Button;
