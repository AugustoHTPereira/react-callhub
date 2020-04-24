import React, { useState } from "react";
import "./style.css";
import { FaShareSquare, FaCheckSquare, FaTimes, FaTrash } from "react-icons/fa";
import ModalCancel from "../Modal/Cancel";
import ModalConclude from "../Modal/Conclude";
import ModalSend from "../Modal/Send";

const ResponseSupport = ({ call }) => {
  const [modal, setModal] = useState("");

  const Modais = {
    SEND: <ModalSend call={call} close={() => setModal("")} />,
    CANCEL: <ModalCancel call={call} close={() => setModal("")} />,
    CLOSE: <ModalConclude call={call} close={() => setModal("")} />,
  };

  const HandleModal = () => modal && Modais[modal];

  return (
    <div className="Response">
      <div className="Actions">
        <button
          onClick={() => setModal("CANCEL")}
          title="Excluir"
          className="Link Dark Danger"
        >
          <FaTrash />
        </button>
        <button
          onClick={() => setModal("SEND")}
          title="Redirecionar"
          className="Link Dark Share"
        >
          <FaShareSquare />
        </button>
        <button
          onClick={() => setModal("CLOSE")}
          title="Finalizar"
          className="Link Dark Success"
        >
          <FaCheckSquare />
        </button>
      </div>

      <HandleModal />
    </div>
  );
};

export default ResponseSupport;
