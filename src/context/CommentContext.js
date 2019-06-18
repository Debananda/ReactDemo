import React, { Component } from "react";

export const CommentContext = React.createContext({ comments: [] });

export class CommentProvider extends Component {
  state = { comments: [], loading: false };
  loadComments = postId => {
    if (postId) {
      this.setState({ loading: true });
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(json => {
          const comments = json.filter(c => c.postId === postId);
          this.setState({ comments, loading: false });
        });
    }
  };
  render() {
    return (
      <CommentContext.Provider
        value={{ ...this.state, loadComments: this.loadComments }}
      >
        {this.props.children}
      </CommentContext.Provider>
    );
  }
}
