import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/app" component={() => <Messenger user={this.state.user}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
