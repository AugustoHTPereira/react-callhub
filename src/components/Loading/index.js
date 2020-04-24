import React from "react";
import "./style.css";

const Loading = ({ text = "Carregando..." }) => (
  <div className="LoadingContent">
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    {
      text && (
        <>
          <h1>Aguarde</h1>
          <p>{text}</p>
        </>
      )
    }
  </div>
);

export default Loading;
