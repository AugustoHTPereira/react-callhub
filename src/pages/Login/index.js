import React, { useState } from "react";
import "./style.css";

import LoginComponent from "../../components/Login";
import ForgotPassword from "../../components/ForgotPassword";

const Login = () => {
  const [stage, setStage] = useState("LOGIN");
  const [mail, setMail] = useState("");

  const stages = {
    LOGIN: <LoginComponent setMail={setMail} setStage={setStage} />,
    FORGOTPASSWORD: <ForgotPassword mail={mail} setStage={setStage} />,
  };

  const HandleStage = () => {
    return stages[stage];
  };

  return (
    <div className="LoginContent">
      <div className="Centered">
        <HandleStage />
      </div>
    </div>
  );
};

export default Login;
