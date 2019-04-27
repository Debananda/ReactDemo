import React, { Component, useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        authContext.isUserAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            push
            to={{
              pathname: "/auth",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
