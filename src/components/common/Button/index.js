import React from "react";
import "./button.css";
const Button = ({ buttonText, onClick }) => {
  return (
    <div className="button-wrapper flex absolute-center" onClick={onClick}>
      {buttonText}
    </div>
  );
};

export default Button;
