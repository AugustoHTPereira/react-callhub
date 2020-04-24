import React, { Component } from "react";
import { Link } from "react-router-dom";
import api from "../../services/Api";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserActions from "../../store/actions/User";
import "./style.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      password: "",
      passwordconfirmation: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("accounts", this.state);

      const {
        accessToken,
        refreshToken,
        expiressAt,
        createdAt,
      } = response.data;

      this.props.setUserToken({
        accessToken,
        refreshToken,
        expiressAt,
        createdAt,
      });

      this.props.next("COMPANY");
    } catch (error) {
      alert(
        "Ocorreu algum erro ao tentar te cadastrar. Verifique os dados e tente novamente!"
      );
    }
  };

  render() {
    return (
      <div className="RegisterComponentContent">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={(e) =>
              this.setState({ ...this.state, name: e.target.value })
            }
            value={this.state.name}
            placeholder="Nome"
            type="text"
          />
          <input
            onChange={(e) =>
              this.setState({ ...this.state, email: e.target.value })
            }
            value={this.state.email}
            placeholder="Email"
            type="email"
          />
          <input
            onChange={(e) =>
              this.setState({ ...this.state, password: e.target.value })
            }
            value={this.state.password}
            placeholder="Senha"
            type="password"
          />
          <input
            onChange={(e) =>
              this.setState({
                ...this.state,
                passwordconfirmation: e.target.value,
              })
            }
            value={this.state.passwordconfirmation}
            placeholder="Confirme sua senha"
            type="password"
          />

          <input type="submit" value="Próximo" />
        </form>

        <div
          style={{ marginTop: 25, display: "flex", justifyContent: "center" }}
        >
          <Link to="/login" title="Acessar o sistema">
            Já tenho uma conta
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch);

export default connect(null, mapDispatchToProps)(Register);
