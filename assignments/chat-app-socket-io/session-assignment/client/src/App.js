import React, {Component} from 'react';
import './App.css';

import FacebookButton from './components/FacebookButton';
import Messenger from './components/Messenger';

class Home extends Component {

  render() {
    return (
        <FacebookButton />
    );
  }
}

class App extends Component {

  constructor() {
    super();

    this.state = {
      user: undefined
    }

    this.updateUser = this.updateUser.bind(this);
  }

  updateUser(user) {
    this.setState({user});
  }

  render() {
    return (
      <div>
        <Home />
        <Messenger />
      </div>
    );
  }
}

export default App;
