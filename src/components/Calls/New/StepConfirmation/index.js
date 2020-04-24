import React from "react";
import { connect } from "react-redux";
import Api from "../../../../services/Api";
import FileList from "../../../Upload/FileList";
import "./style.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Loading from "../../../Loading";

const StepConfirmation = ({ call, setStep, accessToken }) => {
  const [isLoading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("Carregando...");

  const handleConfirmation = async () => {
    setLoading(true);
    setLoadingText("Compactando formulário...");

    const data = {
      title: call.title,
      description: call.description,
      priority: call.priority.id,
      sectorDestinId: "30f6593e-ed42-4a4d-8588-b74bfaa61a62",
    };

    try {
      setLoadingText("Enviando dados...");
      await Api.post("/calls", data, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      toast.success("Chamado criado com sucesso!", {
        onClose: () => (window.location.href = "/calls"),
      });
      setLoadingText("Redirecionando você ao início...");
    } catch (error) {
      console.error(error.message);
      toast.error("Erro ao criar o chamado.", {
        autoClose: false,
      });
      setLoading(false);
      setLoadingText("")
    }
  };

  return (
    <div className="ContentConfirmation">
      {isLoading && <Loading text={loadingText} />}

      <h3 className="PageTitle">Confirmação</h3>

      <div>
        <h2 className="CallTitle">{call.title}</h2>
      </div>

      <div>
        <p className="CallDescription">{call.description}</p>
      </div>

      <div>
        <p className="CallPriority">Prioridade {call.priority.name}</p>
      </div>

      <div className="CallFileList">
        <FileList files={call.attachs} />
      </div>

      <div className="Options">
        <button className="Link" onClick={() => setStep("ATTACH")}>
          Voltar
        </button>

        <button className="Btn" disabled={isLoading} onClick={handleConfirmation}>
          Confirmar
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  call: state.call.newCall,
  accessToken: state.user.accessToken,
});

export default connect(mapStateToProps)(StepConfirmation);
