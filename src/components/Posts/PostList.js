import React, { Component, Fragment } from "react";
import { Row, Col, Modal, ModalHeader, ModalBody } from "reactstrap";
import Post from "./Post";
import UserDetails from "./UserDetails";
import Loader from "../Common/Loader";

export default class PostList extends Component {
  state = {
    posts: [],
    userDetails: {},
    modal: false
  };
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => this.setState({ posts: json }));
  }
  getUserDetails = userId => {
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then(response => response.json())
      .then(json => this.setState({ userDetails: json, modal: true }));
  };
  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };
  render() {
    return this.state.posts.length > 0 ? (
      <Fragment>
        <Row>
          {this.state.posts.map(post => (
            <Col key={post.id} md="3" sm="6" xs="12">
              <Post post={post} getUserDetails={this.getUserDetails} />
            </Col>
          ))}
        </Row>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>User Details</ModalHeader>
          <ModalBody>
            <UserDetails user={this.state.userDetails} />
          </ModalBody>
        </Modal>
      </Fragment>
    ) : (
      <Loader show={true} />
    );
  }
}
