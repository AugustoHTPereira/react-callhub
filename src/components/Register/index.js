import React, { Component } from "react";
import { Link } from "react-router-dom";
import { post, get } from "../../services/Api";
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
      surname: "",
      email: "",
      password: "",
      passwordconfirmation: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (this.state.name.trim().split(" ").length > 0) {
        await this.setState({
          ...this.state,
          name: this.state.name.trim().split(" ")[0],
          surname: this.state.name.trim().split(" ")[
            this.state.name.trim().split(" ").length - 1
          ],
        });
        console.log(this.state);
      }

      const response = await post("accounts", this.state);

      const { accessToken, refreshToken, expiressAt } = response.data;

      const responseDetails = await get("/users/details", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });

      this.props.setUser({
        id: responseDetails.data.user_data.id,
        name: responseDetails.data.user_data.name,
        email: responseDetails.data.user_data.email,
        createdAt: responseDetails.data.user_data.createdAt,
        role: responseDetails.data.user_data.role.name,
        accessToken,
        refreshToken,
        expiressAt,
      });

      this.props.next("COMPANY");
    } catch (error) {
      console.log(error);
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
