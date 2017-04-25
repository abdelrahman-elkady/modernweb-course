import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

class App extends Component {

  constructor() {
    super();
    this.state = {
      message: '',
      messages: [],
      socket: io('localhost:3000')
    }

    this.state.socket.on('chat message', msg => {
      let messages = this.state.messages;
      messages.push(msg);
      this.setState({messages});
    });

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

  generateMessageList() {
    return this.state.messages.map((msg, index) => {
      return (
        <li key={index}>{msg}</li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul id="messages">
          {this.generateMessageList()}
        </ul>
        <form action="">
          <input value={this.state.message} onChange={this.handleMessageChange} autoComplete="off"/>
          <button onClick={this.handleMessageSend}>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
