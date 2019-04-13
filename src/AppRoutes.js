import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/Common/NotFound";
import Posts from "./components/Posts";
import About from "./components/About";

export default function AppRoutes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/posts" component={Posts} />
      <Route path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}
