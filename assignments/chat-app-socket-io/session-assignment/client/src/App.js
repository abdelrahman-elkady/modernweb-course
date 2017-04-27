import React, {Component} from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import FacebookButton from './components/FacebookButton';

class Home extends Component {

  render() {
    return (
        <FacebookButton />
    );
  }
}

const App = props => {
  return (
    <Router>
      <Route exact path="/" component={Home}/>
    </Router>
  );
}

export default App;
