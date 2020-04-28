import React, { Component } from "react";
import { connect } from "react-redux";
import api from "../../../services/Api";

import "./style.css";

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

    await api.post(
      `users/department/${departmentId}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${this.props.accessToken}`,
        },
      }
    );

    window.location.href = "/app";
  }

  render() {
    return (
      <div className="RegisterDepartmentsContent">
        {this.state.departments.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            Não encontramos nenhum departamento.
          </p>
        ) : (
          <>
            <p style={{ marginLeft: 5, color: "#787878" }}>
              Ingresse em um dos departamentos encontrados na empresa{" "}
              {this.state.company.name}:
            </p>
            <ul className="DepartmentsContent">
              {this.state.departments.map((department, index) => (
                <li
                  onClick={(event) =>
                    this.selectDepartment(event, department.id)
                  }
                  key={index}
                >
                  {department.name}
                </li>
              ))}
            </ul>
          </>
        )}

        <div
          style={{
            marginTop: 15,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button
            onClick={(event) => {
              this.props.next("COMPANY");
              event.preventDefault();
            }}
            className="Link"
          >
            Voltar
          </button>
          <button
            onClick={(event) => {
              window.location.href = "/app";
              event.preventDefault();
            }}
            className="Link"
          >
            Continuar sem departamento
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  company: state.user.company,
  accessToken: state.user.accessToken,
});

export default connect(mapStateToProps)(ChooseDepartment);
