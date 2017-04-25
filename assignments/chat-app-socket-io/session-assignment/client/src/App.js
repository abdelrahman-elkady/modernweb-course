import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';

class App extends Component {

  connect() {
    let socket = io('localhost:3000');
  }

  render() {
    return (
      <div>
        <button onClick={() => this.connect()}>Connect</button>
        <ul id="messages"></ul>
        <form action="">
          <input id="m" autocomplete="off"/>
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
