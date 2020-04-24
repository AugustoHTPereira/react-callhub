import React from "react";
import CallsComponent from "../../components/Calls";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

const Calls = () => (
  <div className="PageContent">
    <Header />
    <div className="Container">
      <Sidebar />
      <CallsComponent />
    </div>
  </div>
);

export default Calls;
