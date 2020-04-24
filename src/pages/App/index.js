import React, { Component } from "react";
import "./style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

export class App extends Component {

  render() {
    return (
      <div className="PageContent">
        <Header />
        <div className="Container">
          <Sidebar />

        </div>
      </div>
    );
  }
}
