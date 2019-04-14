import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Col
} from "reactstrap";

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
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-8 col-md-6">
            <Card>
              <CardHeader>Sign Up</CardHeader>
              <CardBody>
                <Form onSubmit={this.handleRegister}>
                  <FormGroup row>
                    <Label sm={4}>First Name</Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleInputChange}
                        placeholder="First Name"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={4}>Last Name</Label>
                    <Col sm={8}>
                      <Input
                        type="text"
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleInputChange}
                        placeholder="Last Name"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={4}>Phone number</Label>
                    <Col sm={8}>
                      <Input
                        type="tel"
                        name="phone"
                        value={this.state.phone}
                        onChange={this.handleInputChange}
                        placeholder="Phone"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={4}>Email</Label>
                    <Col sm={8}>
                      <Input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        placeholder="Email"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={4}>Password</Label>
                    <Col sm={8}>
                      <Input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        placeholder="Password"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label sm={4}>Confirm Password</Label>
                    <Col sm={8}>
                      <Input
                        type="password"
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleInputChange}
                        placeholder="Confirm Password"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup>
                    <Button type="submit" color="primary">
                      Sign Up
                    </Button>
                    <Button color="link" onClick={this.redirectSignIn}>
                      Sign In
                    </Button>
                  </FormGroup>
                </Form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
