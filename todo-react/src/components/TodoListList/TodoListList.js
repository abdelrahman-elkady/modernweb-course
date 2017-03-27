import React, {Component} from 'react';

import './create-list.css';
import './navigation.css';
import './todo-list-list.css';

export default class TodoListList extends Component {

  selectList() {

  }

  removeList() {

  }

  renderLists() {
    return this.props.lists.map((entry, index) => {
      return (
        <li key={index} className="todo-list-list__item primary-bg-color" onClick={() => this.selectList(index)}>
          <a href="#" className="todo-list-list__todo-list">
            <span className="todo-list-list__todo-list__title">{entry.title}</span>
            <button className="todo-list-list__todo-list__delete-btn" onClick={() => this.removeList(index)}>x</button>
          </a>
        </li>
      );
    })
  }

  render() {
    return (
      <sidbar className="navigation col f-1">
        <button type="button" className="create-list secondary-bg-color" onClick={() => this.props.addList()}>Create New List</button>
        <ul className="todo-list-list">
          {this.renderLists()}
        </ul>
      </sidbar>
    );
  }
}
