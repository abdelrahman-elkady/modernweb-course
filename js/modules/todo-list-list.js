let TodoListList = {
  render({todo_list_list}) {
    return `
    <sidbar class="navigation col f-1">
      <button type="button" class="create-list secondary-bg-color" onclick="TodoListList.addList()">Create New List</button>
      <ul class="todo-list-list">
        ${todo_list_list.map((entry, index) => {
          return `<li class="todo-list-list__item primary-bg-color" onclick="TodoListList.selectList(${index})">
            <a href="#" class="todo-list-list__todo-list">
              <span class="todo-list-list__todo-list__title">${entry.title}</span>
              <button class="todo-list-list__todo-list__delete-btn" onclick="TodoListList.removeList(${index})">x</button>
            </a>
          </li>`
        }).join('')}
      </ul>
    </sidbar>
    `
  },

  addList() {
    let title = prompt('Enter the title of the new list');

    if(title) {
      Observer.emit('action', {
        type: 'ADD_LIST',
        title
      });
    }
  },

  selectList(index) {
    Observer.emit('action', {
      type: 'SELECT_LIST',
      index
    });
  },

  removeList(index) {
    Observer.emit('action', {
      type: 'REMOVE_LIST',
      index
    });
  }
}
