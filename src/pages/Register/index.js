import React, { useState } from "react";
import ChooseCompany from "../../components/Register/ChooseCompany";
import ChooseDepartment from "../../components/Register/ChooseDepartment";
import RegisterComponent from "../../components/Register";
import "./style.css";

const Register = () => {
  const [stage, setStage] = useState("REGISTER");

  const stages = {
    REGISTER: <RegisterComponent next={setStage} />,
    COMPANY: <ChooseCompany next={setStage} />,
    DEPARTMENT: <ChooseDepartment next={setStage} />,
  };

  const HandleStages = () => stages[stage];

  return (
    <div className="RegisterContent">
      <div className="Centered">
        <div className="Card">
          <div className="CardHeader">
            <h1>Registro</h1>
            <p>Cadastre-se agora mesmo!</p>
          </div>
          <div className="CardBody">
            <HandleStages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
