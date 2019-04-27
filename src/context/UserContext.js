import React, { Component, createContext } from "react";

export const UserContext = createContext();
export class UserProvider extends Component {
  state = { userDetails: null, loading: false, error: null };
  getUserDetails = userId => {
    this.setState({
      loading: true,
      error: null
    });
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then(response => {
        if (response.status !== 200) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json =>
        this.setState({
          userDetails: json,
          loading: false
        })
      )
      .catch(error => {
        this.setState({
          userDetails: {},
          error,
          loading: false
        });
      });
  };
  render() {
    return (
      <UserContext.Provider
        value={{ ...this.state, getUserDetails: this.getUserDetails }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
