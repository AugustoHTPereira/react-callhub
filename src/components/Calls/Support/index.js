import React, { Component } from "react";
import Header from "../Header";
import MyCalls from "../MyCalls";
import ListSupport from "./ListSupport";

// import { Container } from './styles';

export default class Support extends Component {
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
        case "ALLSUPPORTS":
          return <ListSupport />;

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
              name: "Suporte",
              value: "ALLSUPPORTS",
            },
          ]}
          switchMenu={switchMenu}
        />
        <Content />
      </div>
    );
  }
}
