import React from "react";

const ResponseIntern = () => (
  <div className="Response">
    <textarea placeholder="Resposta" cols="30" rows="7"></textarea>
    <div className="Actions">
      <button className="Link">Limpar</button>
      <button className="Btn">Enviar</button>
    </div>
  </div>
);

export default ResponseIntern;
