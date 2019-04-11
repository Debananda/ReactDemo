import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Common/Header";
import AppRoutes from "./AppRoutes";
import ErrorBoundary from "./components/Common/ErrorBoundary";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundary>
          <Router>
            <Header />
            <AppRoutes />
          </Router>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
