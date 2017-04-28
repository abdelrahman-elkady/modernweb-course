import React, {Component} from 'react';
import './messenger.css';
import io from 'socket.io-client';

class Messenger extends Component {

  constructor() {
    super();
    this.state = {
      message: '',
      messages: [],
      socket: io('localhost:1337')
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

  renderMessageList() {
    console.log(this.props.user);

    return this.state.messages.map((msg, index) => {
      return (
        <li key={index}>
          {msg}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul id="messages">
          {this.renderMessageList()}
        </ul>
        <form action="">
          <input value={this.state.message} onChange={this.handleMessageChange} autoComplete="off"/>
          <button onClick={this.handleMessageSend}>Send</button>
        </form>
      </div>
    );
  }
}

export default Messenger;
