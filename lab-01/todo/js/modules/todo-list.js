let TodoList = {
  render(todoList) {
    return `

    <main class="col f-3">
      <div class="row create-todo">
        <input type="text" class="create-todo__input" placeholder="Enter New To Do">
        <button type="button" class="create-todo__submit-btn secondary-bg-color" onclick="TodoList.addItem()">+</button>
      </div>
      <ul class="todo-list col">
        ${todoList.items.map((item) => TodoItem.render(item)).join('')}
      </ul>
    </main>

    `
  },

  addItem(event) {
    let todoInput = document.getElementsByClassName('create-todo__input')[0];
    let value = todoInput.value;

    todoInput.value = 0;

    Observer.publish('action', {
      type: 'ADD_ITEM',
      item: {
        text: value,
        done: false
      }
    });
  }
}
