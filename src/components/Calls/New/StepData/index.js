import React, { useState } from "react";
import "./style.css";

import { connect } from "react-redux";
import { setNewCallData } from "../../../../store/actions/Call";

const StepData = ({ setStep, call, setCallData }) => {
  const [title, setTitle] = useState(call.title);
  const [description, setDescription] = useState(call.description);

  return (
    <div className="ContentData">
      <h3 className="PageTitle">Novo chamado</h3>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Descreva brevemente seu problema"
      ></input>
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Descreva exaustivamente seu problema"
      ></textarea>

      <div className="Options">
        <button
          onClick={() => {
            setCallData({ title, description });
            setStep("PRIORITY");
          }}
        >
          Próximo
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    call: state.call.newCall,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    setCallData: (data) => dispatch(setNewCallData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepData);
