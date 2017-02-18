let TodoItem = {
  render({item, index}) {
    return `
    <li class="todo-list__item">
      <div class="todo-item">

        <input class="todo-item__done" type="checkbox" ${item.done ? 'checked': ''} onchange="TodoList.toggleItem(${index})">
        <span class="todo-item__text">${item.text}</span>
        <button class="todo-item__delete-btn" onclick="TodoList.removeItem(${index})">x</button>
      </div>
    </li>
    `
  },


}
