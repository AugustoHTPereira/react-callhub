import React, { Component } from "react";
import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import Loading from "../../../components/Loading";
import CallData from "../../../components/Calls/Details/CallData";
import Timeline from "../../../components/Calls/Details/Timeline";
import "./style.css";
import { toast } from "react-toastify";
import * as Api from "../../../services/Api";
import { connect } from "react-redux";
import ResponseCall from "../../../components/Calls/Details/Response";

class DetailsCall extends Component {
  constructor(props) {
    super(props);

    this.state = {
      call: null,
      isLoading: true,
    };
  }

  async getCall(id) {
    try {
      const response = await Api.get(`calls/${id}`, {
        Authorization: `Bearer ${this.props.accessToken}`,
      });

      await this.setState({
        ...this.state,
        call: response.data,
        isLoading: false,
      });

      toast.info(
        `Este chamado está aguardando uma resposta sua. Clique aqui para ir direto para a caixa de resposta.`,
        {
          autoClose: 8500,
          position: toast.POSITION.TOP_RIGHT,
        }
      );
    } catch (error) {
      toast.error("Falha! " + error.message);
    }
  }

  componentWillMount() {
    if (this.props.match.params) {
      this.getCall(this.props.match.params.id);
    }
  }

  render() {
    return (
      <div className="PageContent DetailsCallContent">
        <Header />
        <div className="Container">
          <Sidebar />
          {this.state.call && (
            <div className="Content">
              <h3 className="PageTitle">
                Detalhes do chamado
                <span className="Identity">#{this.state.call.id}</span>
              </h3>

              <CallData call={this.state.call} />

              <span className="Separator"></span>
              <ResponseCall call={this.state.call} />
              <Timeline timeline={this.state.call.timeline} />
            </div>
          )}

          {this.state.isLoading && (
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
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accessToken: state.user.accessToken,
});

export default connect(mapStateToProps)(DetailsCall);
