import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { AuthContext } from "../../context/AuthContext";

class Auth extends Component {
  static contextType = AuthContext;
  render() {
    return (
      <Switch>
        <Route
          path={this.props.match.url}
          render={props => (
            <SignIn
              {...props}
              isUserAuthenticated={this.context.isUserAuthenticated}
              loading={this.context.loading}
              userSignIn={this.context.userSignIn}
            />
          )}
          exact
        />
        <Route path={`${this.props.match.url}/sign-up`} component={SignUp} />
      </Switch>
    );
  }
}

export default Auth;
