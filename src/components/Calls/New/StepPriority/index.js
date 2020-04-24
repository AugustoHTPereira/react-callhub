import React from "react";
import "./style.css";

import { connect } from "react-redux";
import { setNewCallPriority } from "../../../../store/actions/Call";

const StepPriority = ({ setStep, setPriority }) => {
  const choosePriority = (priority) => {
    setPriority(priority);

    setStep("ATTACH");
  };

  return (
    <div className="ContentPriority">
      <h3 className="PageTitle">Atribuição de prioridade</h3>

      <div className="Priorities">
        <button onClick={() => choosePriority({id: 1, name: "Low"})} className="Priority Low">
          <h1>Baixa</h1>
          <p>
            Defina baixa quando você precisar de ajuda para resolver algum
            problema, mas você mesmo(a) pode resolve-lo!
          </p>
        </button>
        <button onClick={() => choosePriority({id: 2, name: "Medium"})} className="Priority Medium">
          <h1>Média</h1>
          <p>
            Defina média caso precise de alguém para resolver o problema para
            você!
          </p>
        </button>
        <button onClick={() => choosePriority({id: 3, name: "High"})} className="Priority High">
          <h1>Alta</h1>
          <p>Defina alta quando você não faz ideia do que seja o problema.</p>
        </button>
      </div>

      <div className="Options">
        <button className="Link" onClick={() => setStep("DATA")}>
          Voltar
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setPriority: (priority) => dispatch(setNewCallPriority(priority)),
});

export default connect(null, mapDispatchToProps)(StepPriority);
