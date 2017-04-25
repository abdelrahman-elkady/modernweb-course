import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

class App extends Component {

  constructor() {
    super();
    this.state = {message: '', socket: io('localhost:3000')}

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleMessageSend = this.handleMessageSend.bind(this);
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value});
  }

  handleMessageSend(event) {
    event.preventDefault();

    this.state.socket.emit('chat message', this.state.message);
    this.resetInput();
  }

  resetInput() {
    this.setState({message: ''});
  }

  render() {
    return (
      <div>
        <ul id="messages"></ul>
        <form action="">
          <input value={this.state.message} onChange={this.handleMessageChange} autoComplete="off"/>
          <button onClick={this.handleMessageSend}>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
