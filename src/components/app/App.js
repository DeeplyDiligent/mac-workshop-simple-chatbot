import React, { Component } from "react";
import _ from "lodash";
import "./App.css";

class App extends Component {
  state = { messages: ["Pirate: rrrrrrr! arrrrrr!"], chatBoxText: "" };
  messages = [
    "I am a pirate",
    "Yes sirrrrrrr, ill hoist yeerrrr flag",
    "I got big baaallssss",
    "Me eye a hook and me hand full of scotch"
  ];
  onTextChange = event => {
    this.setState({ chatBoxText: event.target.value });
  };
  onKeyPress = event => {
    if (event.key === "Enter") {
      let newMessage = _.sample(this.messages);
      this.setState(prevState => {
        let messages = prevState.messages;
        messages.unshift(`Deep: ${this.state.chatBoxText}`);
        messages.unshift(`Pirate: ${newMessage}`);
        return { messages: messages };
      });
      this.setState({ chatBoxText: "" });
    }
  };
  render() {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <div>
          <input
            className="border border-black border-1 w-full"
            type="text"
            value={this.state.chatBoxText}
            onChange={this.onTextChange}
            onKeyPress={this.onKeyPress}
          />
          <div>
            {this.state.messages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
