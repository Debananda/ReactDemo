import React, {Component} from "react";
import {
    Card
} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Button} from 'primereact/button';
import {Redirect} from 'react-router-dom';
import withLoader from "../Common/withLoader";

class SignIn extends Component {
    state = {
        userName: "",
        password: ""
    };
    handleLogin = event => {
        event.preventDefault();
        this.props.userSignIn(this.state.userName, this.state.password);
    };
    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    redirectSignUP = () => {
        this.props.history.push(`${this.props.match.url}/sign-up`);
    };

    render() {
        const {from} = this.props.location.state || {from: {pathname: '/'}};
        if (this.props.isUserAuthenticated) {
            return <Redirect to={from}/>
        }
        return (
            <div className="p-grid p-justify-between">
                <div className={"p-col-4 p-col-align-center p-offset-4"}>
                    <Card title={"Sign In"}>
                        <form onSubmit={this.handleLogin} className={"p-grid p-fluid"}>
                            <div className={"p-col-12"}>
                                <span className="p-float-label">
                                    <InputText type="email"
                                               name="userName"
                                               id="txtUserName"
                                               value={this.state.userName}
                                               onChange={this.handleInputChange}/>
                                               <label htmlFor="txtUserName">Username</label>
                                </span>
                            </div>
                            <div className={"p-col-12"}>
                                <span className="p-float-label">
                                    <InputText
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}
                                        id={"txtPassword"}
                                    />
                                    <label htmlFor="txtPassword">Password</label>
                                </span>
                            </div>
                            <div className={"p-col-12"}>
                                <div className="p-grid">
                                    <div className="p-col-6">
                                        <Button type="submit" label={"Sign In"}/>
                                    </div>
                                    <div className="p-col-6">
                                        <Button color="link" onClick={this.redirectSignUP} label={"Sign Up"}
                                                className={"p-button-secondary"}/>
                                    </div>
                                </div>


                            </div>
                        </form>
                    </Card>
                </div>
            </div>
        );
    }
}

export default withLoader(SignIn);
