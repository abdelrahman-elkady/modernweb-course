import React, { Component } from 'react';
import './index.css';

class App extends Component {
  render() {
    return (

      <div id="appContainer" className="col">
        <header className="header row primary-bg-color">
          <h1 className="header__title">To Do App</h1>
        </header>

        {/* <div className="row">
          <TodoListList />
          <TodoList />
        </div> */}
      </div>
    );
  }
}

export default App;
