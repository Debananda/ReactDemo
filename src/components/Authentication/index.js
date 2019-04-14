import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default class Auth extends Component {
  render() {
    return (
      <Switch>
        <Route path={this.props.match.url} component={SignIn} exact />
        <Route path={`${this.props.match.url}/sign-up`} component={SignUp} />
      </Switch>
    );
  }
}
