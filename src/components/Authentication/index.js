import React, {Component} from "react";
import {Switch, Route} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {connect} from 'react-redux';
import {userSignIn} from '../../store/actions/AuthActions';

class Auth extends Component {
    render() {
        return (
            <Switch>
                <Route path={this.props.match.url}
                       render={(props) => <SignIn {...props}
                                                  isUserAuthenticated={this.props.isUserAuthenticated}
                                                  loading={this.props.loading}
                                                  userSignIn={this.props.userSignIn}/>} exact/>
                <Route path={`${this.props.match.url}/sign-up`} component={SignUp}/>
            </Switch>
        );
    }
}

export default connect(state => ({
    isUserAuthenticated: state.auth.isUserAuthenticated,
    loading: state.auth.loading
}), {userSignIn})(Auth);
