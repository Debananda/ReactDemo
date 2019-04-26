import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from "react-redux";

const PrivateRoute = ({component: Component, isUserAuthenticated, ...rest}) => (
    <Route {...rest} render={(props) => (
        isUserAuthenticated
            ? <Component {...props} />
            : <Redirect push to={{
                pathname: '/auth',
                state: {from: props.location}
            }}/>
    )}/>
);

export default connect(state => ({isUserAuthenticated: state.auth.isUserAuthenticated}), null)(PrivateRoute)