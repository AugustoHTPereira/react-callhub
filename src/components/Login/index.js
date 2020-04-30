import React, { Component } from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as UserActions from "../../store/actions/User";
import { bindActionCreators } from "redux";
import api from "../../services/Api";
import ButtonLoading from "../Loading/ButtonLoading";

import "./style.css";
import { toast } from "react-toastify";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
      stayLogged: false,
      isLoading: false,
    };
  }

  componentDidMount() {}

  doLogin = async (event) => {
    event.preventDefault();
    await this.setState({ ...this.state, isLoading: true });
    this.props.clearStorageUser();
    try {
      const response = await api.post("/accounts/login", {
        email: this.state.email,
        password: this.state.password,
      });

      console.log(response.data);

      const data = {
        accessToken: response.data.accessToken,
        expiressAt: response.data.expiressAt,
        ...response.data.user,
        stayLogged: this.state.stayLogged,
        role: response.data.user.role.name || "INTERN",
      };

      console.log(data);

      this.props.setUser(data);
      window.location.href = "/app";
    } catch (error) {
      console.log("ERRO LOGIN", error);
      this.setState({ ...this.state, password: "" });
      if (error.response) {
        if (error.response.status === 401) toast.warn("Credenciais inválidas.");
        else toast.error(error.message);
      } else
        toast.error(
          "Aconteceu algum erro não esperado. " +
            error.message +
            " Contate o suporte clicando aqui!",
          {
            onClick: () => (window.location.href = "/app/support"),
          }
        );
    }
    await this.setState({ ...this.state, isLoading: false });
  };

  render() {
    return (
      <div className="Card">
        <div className="CardHeader">
          <h1>Login</h1>
          <p>Acesso ao sistema</p>
        </div>
        <form onSubmit={(event) => this.doLogin(event)} className="CardBody">
          <input
            value={this.state.email}
            onChange={(e) =>
              this.setState({ ...this.state, email: e.target.value })
            }
            type="email"
            placeholder="Digite seu e-mail"
          />
          <input
            value={this.state.password}
            onChange={(e) =>
              this.setState({ ...this.state, password: e.target.value })
            }
            type="password"
            placeholder="Digite sua senha"
          />

          <button type="submit" disabled={this.state.isLoading}>
            {!this.state.isLoading ? "ENTRAR" : <ButtonLoading />}
          </button>
        </form>

        <div className="CardFooter">
          <button
            className="Link"
            onClick={(e) => {
              e.preventDefault();
              this.props.setStage("FORGOTPASSWORD");
            }}
            title="Recuperar acesso"
          >
            Esqueci minha senha
          </button>

          <span className="Pipe"></span>

          <Link to="/register" title="Registrar no sistema">
            Não possuo uma conta
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  token: state.user.token,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
