import React from "react";
import Comment from "./Comment";
import { Col } from "reactstrap";
import withLoader from "../Common/withLoader";

const CommentsList = props => {
  return (
    <React.Fragment>
      {props.comments.map(comment => (
        <Col xs="12" sm="6" md="3" key={comment.id}>
          <Comment comment={comment} />
        </Col>
      ))}
    </React.Fragment>
  );
};

export default withLoader(CommentsList);
