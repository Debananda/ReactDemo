import React, { Component, createContext } from "react";

export const PostContext = createContext();

export class PostProvider extends Component {
  state = {
    error: null,
    loading: false,
    posts: []
  };
  loadAllPosts = () => {
    this.setState({ loading: true, error: null });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.body);
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          posts: json,
          loading: false,
          error: null
        });
      })
      .catch(error => {
        this.setState({
          posts: [],
          error,
          loading: false
        });
      });
  };
  render() {
    return (
      <PostContext.Provider
        value={{ ...this.state, loadAllPosts: this.loadAllPosts }}
      >
        {this.props.children}
      </PostContext.Provider>
    );
  }
}
