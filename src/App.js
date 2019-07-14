import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    greeting: "Hello"
  };

  render() {
    return <h1>{this.state.greeting} World</h1>;
  }
}

export default App;
