import React, {Component} from 'react';
import './messenger.css';
import connection from '../../socket';

import UserList from '../UserList';

class Messenger extends Component {

  constructor() {
    super();

    this.state = {
      message: '',
      messages: []
    }

    connection.on('chat message', msg => {
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

    connection.emit('chat message', this.state.message);
    this.resetInput();
  }

  resetInput() {
    this.setState({message: ''});
  }

  renderMessageList() {
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
        <UserList />

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
