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

export default class SignIn extends Component {
  state = {
    userName: "",
    password: ""
  };
  handleLogin = event => {
    event.preventDefault();
    console.log(this.state);
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
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-6 col-md-4">
            <Card>
              <CardHeader>Sign In</CardHeader>
              <CardBody>
                <Form onSubmit={this.handleLogin}>
                  <FormGroup row>
                    <Label sm={4}>User Name</Label>
                    <Col sm={8}>
                      <Input
                        type="email"
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleInputChange}
                        placeholder="User Name"
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
                  <FormGroup>
                    <Button type="submit" color="primary">
                      Sign In
                    </Button>
                    <Button color="link" onClick={this.redirectSignUP}>
                      Sign Up
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
