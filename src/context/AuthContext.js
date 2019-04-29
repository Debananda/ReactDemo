import React, { Component, createContext } from "react";

export const AuthContext = createContext();

export class AuthProvider extends Component {
  state = {
    loading: false,
    user: {},
    isUserAuthenticated: false,
    error: null
  };
  componentDidMount() {
    const loginDetails = JSON.parse(
      window.localStorage.getItem("loginDetails")
    );
    if (loginDetails) {
      if (new Date(loginDetails.expiry) > new Date()) {
        this.setState({
          user: loginDetails.user,
          isUserAuthenticated: loginDetails.isUserAuthenticated
        });
      }
    }
  }
  userSignIn = (userName, password) => {
    this.setState({
      loading: true,
      error: null,
      isUserAuthenticated: false,
      user: {}
    });
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
        const currDate = new Date();
        const expiry = currDate.setHours(currDate.getHours() + 2);
        window.localStorage.setItem(
          "loginDetails",
          JSON.stringify({
            isUserAuthenticated: true,
            user,
            expiry: new Date(expiry)
          })
        );
        this.setState({
          user,
          loading: false,
          isUserAuthenticated: true,
          error: null
        });
      },
      error => {
        window.localStorage.setItem(
          "loginDetails",
          JSON.stringify({
            isUserAuthenticated: true,
            user: null,
            expiry: new Date(0)
          })
        );
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
