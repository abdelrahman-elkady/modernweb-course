import React, {Component} from 'react';
import './App.css';
import io from 'socket.io-client';

import FacebookButton from './components/FacebookLogin/FacebookLogin';
import Messenger from './components/Messenger';

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <FacebookButton />
        <Messenger />
      </div>
    );
  }
}

export default App;
