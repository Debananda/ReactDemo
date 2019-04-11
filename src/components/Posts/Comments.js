import React, { Component } from "react";
import { Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap";

export default class Comments extends Component {
  state = { comments: [] };
  componentDidMount() {
    const postId = Number.parseInt(this.props.match.params["id"]);
    if (postId) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(json => {
          const comments = json.filter(c => c.postId === postId);
          this.setState({ comments });
        });
    }
  }
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <Row>
        <Col xs="12">
          <div className="d-flex justify-content-between">
            <h1>Comments</h1>
            <Button color="link" onClick={this.goBack}>
              Go Back
            </Button>
          </div>
        </Col>

        {this.state.comments.map(comment => (
          <Col xs="12" sm="6" md="3" key={comment.id}>
            <Card>
              <CardHeader>{comment.name}</CardHeader>
              <CardBody>{comment.body}</CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    );
  }
}
