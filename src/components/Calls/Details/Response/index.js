import React from "react";
import ResponseSupport from "./Support";
import ResponseIntern from "./Intern";

const ResponseCall = ({ call }) => {
  const responseDialogs = {
    SUPPORT: <ResponseSupport call={call} />,
    INTERN: <ResponseIntern call={call} />,
  };

  const HandleResponse = () => {
    if (call.situation === "ended") return null;

    return responseDialogs["SUPPORT"];
  };
  return <HandleResponse />;
};

export default ResponseCall;
