import React, { Component } from "react";
import Header from "../Header";
import MyCalls from "../MyCalls";
import AllCalls from "./AllCalls";

// import { Container } from './styles';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "MYCALLS",
    };
  }

  render() {
    const switchMenu = (content) => {
      this.setState({ ...this.state, content: content });
    };

    const Content = () => {
      switch (this.state.content) {
        case "MYCALLS":
          return <MyCalls />;
        case "ALLCALLS":
          return <AllCalls />;

        default:
          return <MyCalls />;
      }
    };

    return (
      <div className="InternContent">
        <Header
          options={[
            {
              name: "Meus",
              value: "MYCALLS",
            },
            {
              name: "Todos",
              value: "ALLCALLS",
            },
          ]}
          switchMenu={switchMenu}
        />
        <Content />
      </div>
    );
  }
}
