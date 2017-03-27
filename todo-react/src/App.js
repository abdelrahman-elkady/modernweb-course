import React, {Component} from 'react';

import Header from './components/Header/Header';
import TodoListList from './components/TodoListList/TodoListList';

import './index.css';

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

  render() {
    return (
      <div>
        <Header/>

        <div className="row">
          <TodoListList lists={this.state.todoListList} addList={this.addList.bind(this)}/>
          {/* <TodoList/> */}
        </div>

      </div>
    );
  }
}

export default App;
