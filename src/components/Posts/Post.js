import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
function Post(props) {
  const handleUserClick = () => {
    props.getUserDetails(props.post.userId);
  };
  const handleCommentClick = () => {
    props.history.push(`${props.match.url}/${props.post.id}/comments`);
  };
  return (
    <Card>
      <CardHeader>{props.post.title}</CardHeader>
      <CardBody>{props.post.body}</CardBody>
      <CardFooter>
        <Button color="link" onClick={handleUserClick}>
          User Details
        </Button>
        <Button color="link" onClick={handleCommentClick}>
          Comments
        </Button>
      </CardFooter>
    </Card>
  );
}

export default withRouter(Post);
