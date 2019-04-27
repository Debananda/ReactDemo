import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";
import Post from "./Post";
import UserDetails from "./UserDetails";
import withLoader from "../Common/withLoader";
import { PostContext } from "../../context/PostContext";
import { UserContext } from "../../context/UserContext";

const PostList = props => {
  const userContext = useContext(UserContext);
  const postContext = useContext(PostContext);

  const [modal, setModal] = useState(false);
  useEffect(() => {
    postContext.loadAllPosts();
  }, []);
  useEffect(() => {
    setModal(Object.keys(userContext.userDetails || {}).length > 0);
  }, [userContext.userDetails]);

  const getUserDetails = userId => {
    userContext.getUserDetails(userId);
  };
  const toggle = () => {
    setModal(!modal);
  };
  return (
    <Container fluid>
      <Row>
        {postContext.posts &&
          postContext.posts.map(post => (
            <Col key={post.id} md="3" sm="6" xs="12">
              <Post post={post} getUserDetails={getUserDetails} />
            </Col>
          ))}
      </Row>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>User Details</ModalHeader>
        <ModalBody>
          <UserDetails user={userContext.userDetails} />
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default withLoader(PostList);
