import React, { Component } from "react";

// import { Container } from './styles';

export default class ModalSend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRedirectId: "",
      message: "",
    };
  }

  render() {
    return (
      <div className="FadeModal">
        <div className="Modal">
          <div className="ModalTitle">
            <p>Tem certeza que deseja encaminhar o chamado?</p>
          </div>

          <div className="ModalBody">
            <select
              value={this.state.userRedirectId}
              onChange={(event) => {
                event.preventDefault();
                this.setState({
                  ...this.state,
                  userRedirectId: event.target.value,
                });
              }}
            >
              <option selected disabled value="">
                Para:
              </option>
              <option value="augusto">augusto</option>
              <option value="guilherme">guilherme</option>
              <option value="gustavo">gustavo</option>
            </select>

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
