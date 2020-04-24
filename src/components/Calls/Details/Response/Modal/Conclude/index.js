import React, { Component } from "react";
import { hash } from "../../../../../../utils/generate";

export default class ModalConclude extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRedirectId: "",
      message: "",
      code: hash(),
      userCode: "",
    };
  }

  render() {
    return (
      <div className="FadeModal">
        <div className="Modal">
          <div className="ModalTitle">
            <p>Tem certeza que deseja finalizar o chamado?</p>
          </div>

          <div className="ModalBody">
            <p>
              Digite <code>{this.state.code}</code> abaixo para confirmar.
            </p>
            <input
              placeholder={this.state.code}
              value={this.state.userCode}
              onChange={(event) => {
                event.preventDefault();
                this.setState({ ...this.state, userCode: event.target.value });
              }}
              type="text"
            />

            <textarea
              style={{ marginTop: 25 }}
              placeholder="Mensagem"
              value={this.state.message}
              onChange={(event) => {
                event.preventDefault();
                this.setState({ ...this.state, message: event.target.value });
              }}
            ></textarea>
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
