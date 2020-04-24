import React, { useState } from "react";
import Attach from "./StepAttach";
import Confirmation from "./StepConfirmation";
import Data from "./StepData";
import Priority from "./StepPriority";

const New = () => {
  const [step, setStep] = useState("DATA");
  const [call, setCall] = useState({
    title: "",
    description: "",
    priority: "",
    Attachs: {},
  });

  const setProperty = (property, value) => {
    setCall({ ...call, [property]: value });
  };

  const steps = {
    DATA: (
      <Data
        callTitle={call.title}
        callDescription={call.description}
        setProperty={setProperty}
        setStep={setStep}
      />
    ),
    PRIORITY: (
      <Priority
        priority={call.priority}
        setProperty={setProperty}
        setStep={setStep}
      />
    ),
    ATTACH: (
      <Attach
        Attachs={call.Attachs}
        setProperty={setProperty}
        setStep={setStep}
      />
    ),
    CONFIRMATION: <Confirmation call={call} setStep={setStep} />,
  };

  const SwitchStep = () => steps[step];

  return <SwitchStep />;
};

export default New;
