import React, { Component } from 'react';
import './stylesheets/base.css';
import './App.css';

class App extends Component {
  render() {
    return (

      <div id="appContainer" class="col">
        <header class="header row primary-bg-color">
          <h1 class="header__title">To Do App</h1>
        </header>

        <div class="row">
          <TodoListList />
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
