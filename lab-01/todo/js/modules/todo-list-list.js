let TodoListList = {
  render({todo_list_list}) {
    return `
    <sidbar class="navigation col f-1">
      <button type="button" class="create-list secondary-bg-color" onclick="TodoListList.addList()">Create New List</button>
      <ul class="todo-list-list">
        ${todo_list_list.map((entry) => {
          return `<li class="todo-list-list__item primary-bg-color">
            <a href="" class="todo-list-list__todo-list">
              <span class="todo-list-list__todo-list__title">${entry.title}</span>
              <button class="todo-list-list__todo-list__delete-btn">x</button>
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
      Observer.publish('action', {
        type: 'ADD_LIST',
        title
      });
    }
  }
}
