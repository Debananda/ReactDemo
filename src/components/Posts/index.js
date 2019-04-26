import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import Comments from "./Comments";

export default class Posts extends Component {
  render() {
    return (
      <Switch>
        <Route path={this.props.match.url} component={PostList} exact />
        <Route path={`${this.props.match.url}/:id/comments`} component={Comments} />
      </Switch>
    );
  }
}
