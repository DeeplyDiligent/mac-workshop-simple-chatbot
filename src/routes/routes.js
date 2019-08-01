import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../components/app/App";
import About from "../components/about";
import Users from "../components/users";
import Home from "../components/home";
class Routes extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
        <Route path="/app/" component={App} />
      </Router>
    );
  }
}

export default Routes;
