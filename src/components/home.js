import React, { Component } from "react";
import {Link} from 'react-router-dom'
class Home extends Component {
  state = {};
  render() {
    return (
      <Link to="/app">
        <div>Home</div>
      </Link>
    );
  }
}

export default Home;
