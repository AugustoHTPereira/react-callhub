import React from "react";
import { connect } from "react-redux";
import Intern from "./Intern";
import Admin from "./Admin";
import Support from "./Support";
import { FaPlus } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";

const SwitchComponent = ({ userRole }) => {
  switch (userRole) {
    case "INTERN":
      return <Intern />;

    case "ADMIN":
      return <Admin />;

    case "SUPPORT":
      return <Support />;

    default:
      return null;
  }
};

const Calls = ({ userRole }) => (
  <div className="CallsContent">
    <SwitchComponent userRole={userRole} />
    <Link to="/calls/new" className="StaticNew">
      <FaPlus />
    </Link>
  </div>
);

const mapStateToProps = (state) => ({
  userRole: state.user.role,
});

export default connect(mapStateToProps)(Calls);
