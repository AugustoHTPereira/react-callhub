import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { App } from "./pages/App";
import { NotFound } from "./pages/Http";
import Calls from "./pages/Calls";
import NewCall from "./pages/Calls/New";
import DetailsCall from "./pages/Calls/Details";
import Landing from "./pages/Landing";

const Routes = ({ token }) => {
  const isAuthenticated = () => {
    try {
      if (token) return true;

      return false;
    } catch (error) {
      return false;
    }
  };

  const PrivateRoute = ({ component: Component, ...rest }) => {
    if (isAuthenticated()) return <Route component={Component} {...rest} />;
    else
      return (
        <Redirect
          to={`/login?redirect=${window.location.pathname}`}
          {...rest}
        />
      );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />

        <PrivateRoute exact path="/app" component={App} />
        <PrivateRoute exact path="/calls" component={Calls} />
        <PrivateRoute exact path="/calls/new" component={NewCall} />
        <PrivateRoute exact path="/calls/:id" component={DetailsCall} />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  token: state.user.accessToken,
});

export default connect(mapStateToProps)(Routes);
