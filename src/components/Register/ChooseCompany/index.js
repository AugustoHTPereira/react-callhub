import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as UserActions from "../../../store/actions/User";
import api from "../../../services/Api";

class ChooseCompany extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [],
      selectedCompany: {},
    };
  }

  async componentDidMount() {
    try {
      const response = await api.get("/companies");
      this.setState({ ...this.state, companies: response.data });
    } catch (error) {
      console.error("ERRO NA COMUNICAÇÃO COM O SERVIDOR", error);
    }
  }

  async selectCompany(event, company) {
    event.preventDefault();
    await this.setState({ ...this.state, selectedCompany: company });

    this.props.setUserCompany(company);
    this.props.next("DEPARTMENT");
  }

  render() {
    return (
      <div>
        <h1>Choose company</h1>
        <ul>
          {this.state.companies.map((company) => (
            <li
              onClick={(event) => this.selectCompany(event, company)}
              key={company.id}
            >
              {company.name}
            </li>
          ))}
        </ul>
        Company: {JSON.stringify(this.props.company)}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(UserActions, dispatch);

const mapStateToProps = (state) => ({
  company: state.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseCompany);
