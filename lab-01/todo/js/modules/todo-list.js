let TodoList = {
  render(todoList) {
    return `

    <main class="col f-3">
      <div class="row create-todo">
        <input type="text" class="create-todo__input" placeholder="Enter New To Do">
        <button type="button" class="create-todo__submit-btn secondary-bg-color" onclick="TodoList.addItem(todoList)">+</button>
      </div>
      <ul class="todo-list col">
        ${todoList ? todoList.items.map((item, index) => TodoItem.render({item, index})).join('') : ''}
      </ul>
    </main>

    `
  },

  addItem() {
    let todoInput = document.getElementsByClassName('create-todo__input')[0];
    let value = todoInput.value;

    todoInput.value = '';

    Observer.emit('action', {
      type: 'ADD_ITEM',
      item: {
        text: value,
        done: false
      }
    });
  },

  removeItem(index) {
    Observer.emit('action', {
      type: 'REMOVE_ITEM',
      index
    });
  },

  toggleItem(index, value) {
    Observer.emit('action', {
      type: 'TOGGLE_ITEM',
      index,
      value
    });
  }
}
