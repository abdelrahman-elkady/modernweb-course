import React, {Component} from 'react';

import Header from './components/Header/Header';
import TodoListList from './components/TodoListList/TodoListList';

import './index.css';

import TodoList from './components/TodoList/TodoList';

class App extends Component {

  constructor() {
    super();

    this.state = {
      todoListList: [
        {
          title: 'First List from JS',
          items: [
            {
              text: 'Somthing from JS',
              done: false
            }, {
              text: 'Something else from JS',
              done: true
            }
          ]
        }, {
          title: 'Second List from JS',
          items: [
            {
              text: 'item 1 from Js',
              done: false
            }, {
              text: 'item 2 from JS',
              done: false
            }
          ]
        }
      ],

      selectedList: 0
    }
  }

  addList() {
    let title = prompt('Enter the title of the new list');

    let lists = this.state.todoListList.slice();

    lists.push({title, items: []});

    this.setState({
      todoListList: lists,
      selectedList: lists.length - 1
    })
  }

  removeList(index) {
    let todoListList = this.state.todoListList.slice();
    todoListList.splice(index, 1);
    let selectedIndex = 0;

    this.setState({todoListList, selectedIndex});
  }

  selectList(index) {
    this.setState({selectedList: index});
  }

  render() {
    return (
      <div>
        <Header/>

        <div className="row">
          <TodoListList
             lists={this.state.todoListList}
             addList={this.addList.bind(this)}
             selectList={this.selectList.bind(this)}
             removeList={this.removeList.bind(this)}/>

          <TodoList todoList={this.state.todoListList[this.state.selectedList]} />
        </div>

      </div>
    );
  }
}

export default App;
