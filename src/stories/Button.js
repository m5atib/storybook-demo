import React from "react";
import "./button.css";
const Button = (props) => {
  const { size = "small", color = "primary", children = "Button" } = props;
  return <button className={`button ${color} ${size}`}>{children}</button>;
};

export default Button;
