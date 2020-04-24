import React, { Component } from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import New from "../../../components/Calls/New";

// import { Container } from './styles';

export default class NewCall extends Component {
  render() {
    return (
      <div className="PageContent">
        <Header />
        <div className="Container">
          <Sidebar />

          <New />
        </div>
      </div>
    );
  }
}
