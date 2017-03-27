import React, {Component} from 'react';

import '../TodoList/create-todo.css';
import '../TodoList/todo-item.css';
import '../TodoList/todo-list.css';

export default class TodoItem extends Component {

  render() {
    return (
      <li className="todo-list__item">
        <div className="todo-item">
          <input className="todo-item__done" type="checkbox" checked={this.props.item.done ? 'checked': ''} onChange={ () => {this.props.toggleItem(this.props.index)} } />
          <span className="todo-item__text">{this.props.item.text}</span>
          <button className="todo-item__delete-btn" onClick={ () => {this.props.removeItem(this.props.index)} }>x</button>
        </div>
      </li>
    );
  }
}
