import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../../services/Api";

class ChooseDepartment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: [],
      selectedDepartment: {},
      company: this.props.company,
    };
  }

  async componentDidMount() {
    try {
      const response = await api.get(
        `companies/${this.state.company.id}/departments`
      );
      this.setState({ ...this.state, departments: response.data });
    } catch (error) {
      console.error("Error while gettin departments", error.message);
    }
  }

  async selectDepartment(event, departmentId) {
    if (
      !window.confirm(
        "Tem certeza de que deseja pedir entrada em " + departmentId + "?"
      )
    )
      return;

    await api.post(`users/department/${departmentId}`, {}, {
      headers: {
        Authorization: `Bearer ${this.props.accessToken}`
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Choose a department for {this.state.company.name}</h1>
        {this.state.departments.length > 0 ? (
          <ul>
            {this.state.departments.map((department, index) => (
              <li
                onClick={(event) => this.selectDepartment(event, department.id)}
                key={index}
              >
                {department.name}
              </li>
            ))}
          </ul>
        ) : (
          <h1>No department found</h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  company: state.user.company,
  accessToken: state.user.token.accessToken,
});

export default connect(mapStateToProps)(ChooseDepartment);
