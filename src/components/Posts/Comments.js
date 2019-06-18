import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { CommentContext } from "../../context/CommentContext";
import CommentsList from "./CommentsList";

export default class Comments extends Component {
  static contextType = CommentContext;

  componentDidMount() {
    const postId = Number.parseInt(this.props.match.params["id"]);
    this.context.loadComments(postId);
  }

  goBack = () => {
    this.props.history.goBack();
  };

  render() {
    console.log(this.context);
    return (
      <Container fluid>
        <Row>
          <Col xs="12">
            <div className="d-flex justify-content-between">
              <h1>Comments</h1>
              <Button color="link" id="btnGoBack" onClick={this.goBack}>
                Go Back
              </Button>
            </div>
          </Col>
          <CommentsList
            comments={this.context.comments}
            loading={this.context.loading}
          />
        </Row>
      </Container>
    );
  }
}
