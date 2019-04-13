import React, { Component } from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "reactstrap";
import { withRouter } from "react-router-dom";

class Post extends Component {
  handleUserClick = () => {
    this.props.getUserDetails(this.props.post.userId);
  };
  handleCommentClick = () => {
    this.props.history.push(
      `${this.props.match.url}/${this.props.post.id}/comments`
    );
  };
  render() {
    return (
      <Card>
        <CardHeader>{this.props.post.title}</CardHeader>
        <CardBody>{this.props.post.body}</CardBody>
        <CardFooter>
          <Button color="link" onClick={this.handleUserClick}>
            User Details
          </Button>
          <Button color="link" onClick={this.handleCommentClick}>
            Comments
          </Button>
        </CardFooter>
      </Card>
    );
  }
}

export default withRouter(Post);
