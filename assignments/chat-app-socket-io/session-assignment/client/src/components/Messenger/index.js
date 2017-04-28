import React, {Component} from 'react';
import './messenger.css';
import connection from '../../socket';

import UserList from '../UserList';

class Messenger extends Component {

  constructor() {
    super();

    this.state = {
      message: '',
      messages: [],
      typing: ''
    }

    connection.on('chat message', messageObject => {
      let messages = this.state.messages;
      messages.push(messageObject);
      this.setState({messages});
    });

    connection.on('typing', user => {
      let username = user.name;
      this.setState({typing: username + ' is Typing ...'});
    });


    // one of the worst hacks I've implemented -_-
    setInterval(() => this.setState({typing: ''}), 3000);

    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleMessageSend = this.handleMessageSend.bind(this);
  }

  handleMessageChange(event) {
    connection.emit('typing', this.props.user);
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
    return this.state.messages.map(({msg, user}, index) => {
      return (
        <li key={index}>
          <img src={user.picture.data.url}/>
          {user.name}:
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
        <span>{this.state.typing}</span>
        <form action="">
          <input value={this.state.message} onChange={this.handleMessageChange} autoComplete="off"/>
          <button onClick={this.handleMessageSend}>Send</button>
        </form>
      </div>
    );
  }
}

export default Messenger;
