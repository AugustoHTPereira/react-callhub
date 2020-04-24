import React, { Component } from "react";
import Api from "../../../services/Api";
import { connect } from "react-redux";
import Loading from "../../Loading";
import { toast } from "react-toastify";

class MyCalls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      calls: [],
      isLoading: true,
    };
  }

  async componentDidMount() {
    try {
      const response = await Api.get("/users/calls", {
        headers: {
          Authorization: `Bearer ${this.props.accessToken}`,
        },
      });
      this.setState({ ...this.state, calls: response.data });
    } catch (error) {
      toast.error("Falha! " + error.message + ". Contate o suporte!");
    } finally {
      this.setState({ ...this.state, isLoading: false });
    }
  }

  render() {
    if (!this.state.isLoading)
      return (
        <ul className="CallList">
          {this.state.calls.length === 0 ? (
            <li style={{ color: "#777", marginTop: 25 }}>
              Nenhum chamado encontrado.
            </li>
          ) : (
            this.state.calls.map((call, index) => (
              <li
                key={index}
                onClick={() => {
                  window.location.href = `calls/${call.id}`;
                }}
                className="Call"
              >
                <div className="CallData">
                  <div className="Situation">
                    <span title="Finalizado" className="Badge Success"></span>
                  </div>
                  <div className="Details">
                    <h2 className="Title">{call.title}</h2>
                    <p className="Description">{call.description}</p>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      );
    else
      return (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            backgroundColor: "#43434344",
          }}
        >
          <Loading text="Buscando informações..." />
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.user.accessToken,
});

export default connect(mapStateToProps)(MyCalls);
