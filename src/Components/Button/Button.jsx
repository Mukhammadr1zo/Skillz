import React from "react";
import "./Button.scss";

const Button = ({ children }) => {
  return <button className="main-btn">{children}</button>;
};

export default Button;
