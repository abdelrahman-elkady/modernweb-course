import React, {Component} from 'react';

import './create-todo.css';
import './todo-item.css';
import './todo-list.css';

import TodoItem from '../TodoItem/TodoItem';

export default class TodoList extends Component {

  constructor() {
    super();
    this.state = {itemText: ''};
  }

  renderItems() {
    return this.props.todoList.items.map((item, index) => {
      return <TodoItem item={item} index={index} key={index} removeItem={this.props.removeItem} toggleItem={this.props.toggleItem} />
    });
  }

  render() {
    return (
      <main className="col f-3">
        <div className="row create-todo">
          <input type="text" className="create-todo__input" placeholder="Enter New To Do" value={this.state.itemText} onChange={ event => this.setState({itemText: event.target.value}) }/>
          <button type="button" className="create-todo__submit-btn secondary-bg-color" onClick={() => {this.props.addItem(this.state.itemText); this.setState({itemText: ''})}}>+</button>
        </div>
        <ul className="todo-list col">
          {this.renderItems()}
        </ul>
      </main>
    );
  }

}
