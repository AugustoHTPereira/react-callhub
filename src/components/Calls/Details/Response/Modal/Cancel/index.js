import React, { useState } from "react";
import { hash } from "../../../../../../utils/generate";
import { Component } from "react";

class ModalCancel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: hash(),
      userCode: "",
    };
  }

  render() {
    return (
      <div className="FadeModal">
        <div className="Modal">
          <div className="ModalTitle">
            <p>Tem certeza que deseja cancelar o chamado?</p>
          </div>

          <div className="ModalBody">
            <p>
              Digite <code>{this.state.code}</code> abaixo para confirmar.
            </p>

            <input
              onChange={(event) => {
                event.preventDefault();
                this.setState({ ...this.state, userCode: event.target.value });
              }}
              value={this.state.userCode}
              placeholder={this.state.code}
              type="text"
            />
            {this.state.code}
            {this.state.userCode}
          </div>

          <div className="ModalFooter">
            <button onClick={this.props.close} className="Link">
              Cancelar
            </button>
            <button
              disabled={this.state.code !== this.state.userCode}
              className="BtnConfirm"
            >
              Pronto
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalCancel;
