import React, { Component, createContext } from "react";

export const AuthContext = createContext();

export class AuthProvider extends Component {
  state = {
    loading: false,
    user: {},
    isUserAuthenticated: false,
    error: null
  };
  userSignIn = (userName, password) => {
    this.setState({
      loading: true,
      error: null,
      isUserAuthenticated: false,
      user: {}
    });
    console.log("here");
    const signInPromise = new Promise((resolve, reject) => {
      if (userName === "deba1988@gmail.com" && password === "password") {
        setTimeout(
          () =>
            resolve({
              id: 1,
              name: "Leanne Graham",
              username: "Bret",
              email: "Sincere@april.biz",
              address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                  lat: "-37.3159",
                  lng: "81.1496"
                }
              },
              phone: "1-770-736-8031 x56442"
            }),
          1000
        );
      } else {
        setTimeout(() => reject(new Error("Failed")), 1000);
      }
    });
    signInPromise.then(
      user => {
        this.setState({
          user,
          loading: false,
          isUserAuthenticated: true,
          error: null
        });
      },
      error => {
        this.setState({
          user: {},
          loading: false,
          isUserAuthenticated: true,
          error: error
        });
      }
    );
  };
  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, userSignIn: this.userSignIn }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
