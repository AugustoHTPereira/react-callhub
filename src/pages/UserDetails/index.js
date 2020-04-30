import React, { Component } from "react";
import { get } from "../../services/Api";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import Loading from "../../components/Loading";

import "./style.css";

export default class UserDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      isLoading: true,
      currentUserWork: null,
    };
  }

  async componentWillMount() {
    var response = null;

    try {
      response = await get(`/users/${this.props.match.params.id}`);
    } catch (error) {
      if (error.response)
        if (error.response.status === 404)
          toast.warn("Registro não encontrado", {
            onClose: () => (window.location.href = "/app"),
          });
      return;
    } finally {
      this.setState({ ...this.state, isLoading: false });
    }

    await this.setState({
      ...this.state,
      currentUser: response.data,
    });
  }

  formatDate() {
    const date = new Date(this.state.currentUser.createdAt);
    return date.toLocaleDateString();
  }

  render() {
    return (
      <>
        <Header />

        <div className="UserDetailsPageContent">
          {this.state.isLoading && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 25,
              }}
            >
              <Loading />
            </div>
          )}
          {this.state.currentUser && (
            <>
              <section className="HeaderUserData">
                <img
                  className="__userImg"
                  src="data:image/png;base64,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"
                  alt={this.state.currentUser.name}
                />
                <div>
                  <h1 className="PageTitle NormalizeText">
                    {this.state.currentUser.name.toLowerCase()}{" "}
                    {this.state.currentUser.surname.toLowerCase()}
                  </h1>

                  <h5>{this.state.currentUser.email}</h5>
                </div>

                <p className="SmallLight">Membro desde: {this.formatDate()}</p>
              </section>
              {this.state.currentUser.department && (
                <>
                  <span className="Spacer"></span>
                  <section className="Work">
                    <p>
                      {this.state.currentUser.role.name.toLowerCase()} 
                      {this.state.currentUser.department.name} - 
                      {this.state.currentUser.department.company.name} 
                    </p>
                  </section>
                </>
              )}
            </>
          )}
        </div>
      </>
    );
  }
}
