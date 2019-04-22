import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";

export default class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleRegister = event => {
    event.preventDefault();
  };
  redirectSignIn = () => {
    this.props.history.push("/auth");
  };

  render() {
    return (
      <div className="p-grid p-justify-between">
        <div className={"p-col-4 p-col-align-center p-offset-4"}>
          <Card title={"Sign Up"}>
            <form onSubmit={this.handleRegister} className={"p-grid p-fluid"}>
              <div className={"p-col-12"}>
                <span className="p-float-label">
                  <label htmlFor="txtFirstName">First Name</label>
                  <InputText
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    id="txtFirstName"
                  />
                </span>
              </div>
              <div className={"p-col-12"}>
                <span className="p-float-label">
                  <label htmlFor="txtLastName">Last Name</label>
                  <InputText
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    id="txtLastName"
                  />
                </span>
              </div>
              <div className={"p-col-12"}>
                <span className="p-float-label">
                  <label htmlFor="txtPhone">Phone</label>
                  <InputText
                    type="tel"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    id="txtPhone"
                  />
                </span>
              </div>
              <div className={"p-col-12"}>
                <span className="p-float-label">
                  <label htmlFor="txtEmail">Email</label>
                  <InputText
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    id="txtEmail"
                  />
                </span>
              </div>
              <div className={"p-col-12"}>
                <span className="p-float-label">
                  <label htmlFor="txtPassword">Password</label>
                  <InputText
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    id="txtPassword"
                  />
                </span>
              </div>
              <div className={"p-col-12"}>
                <span className="p-float-label">
                  <label htmlFor="txtConfirmPassword">Confirm Password</label>
                  <InputText
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleInputChange}
                    id="txtConfirmPassword"
                  />
                </span>
              </div>
              <div className={"p-col-12"}>
                <div className="p-grid">
                  <div className="p-col-6">
                    <Button type="submit" color="primary" label={"Sign Up"} />
                  </div>
                  <div className="p-col-6">
                    <Button
                      color="link"
                      onClick={this.redirectSignIn}
                      label={"Sign In"}
                      className={"p-button-secondary"}
                    />
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
