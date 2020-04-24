import React from "react";
import "./style.css";

export const NotFound = ({ message = "Recurso não encontrado!" }) => (
  <div className="ContentNotFound">
    <h1>404</h1>
    <p>{message}</p>
  </div>
);
