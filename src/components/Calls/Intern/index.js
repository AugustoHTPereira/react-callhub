import React, { Component } from "react";
import Header from "../Header";
import MyCalls from "../MyCalls";

// import { Container } from './styles';

export default class Intern extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "MYCALLS",
    };
  }

  switchMenu(content) {
    this.setState({ ...this.state, content: content });
  }

  render() {
    const Content = () => {
      switch (this.state.content) {
        case "MYCALLS":
          return <MyCalls />;

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
          ]}
          switchMenu={this.switchMenu}
        />
        <Content />
      </div>
    );
  }
}
