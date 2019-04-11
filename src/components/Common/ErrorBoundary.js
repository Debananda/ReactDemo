import React, { Component } from "react";
import { Container } from "reactstrap";

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };
  componentDidCatch(error, errInfo) {
    if (error) {
      console.error(errInfo);
      this.setState({
        error,
        hasError: true
      });
    }
  }
  render() {
    return this.state.hasError ? (
      <Container fluid>
        <h1>Oops !!! Something went wrong</h1>
        <h3>We are looking into it. We will be back sortly</h3>
      </Container>
    ) : (
      this.props.children
    );
  }
}
