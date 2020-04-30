import React from "react";
import "./style.css";

const ButtonLoading = ({ Size = "Small", Color = "Light" }) => (
  <div className={`ButtonLoader ${Size} ${Color}`}></div>
);

export default ButtonLoading;
