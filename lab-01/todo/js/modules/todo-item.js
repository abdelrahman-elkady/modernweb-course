let TodoItem = {
  render(item) {
    return `
    <li class="todo-list__item">
      <div class="todo-item">
        <input class="todo-item__done" type="checkbox" ${item.checked ? 'checked' : ''}>
        <span class="todo-item__text">${item.text}</span>
        <button class="todo-item__delete-btn">x</button>
      </div>
    </li>
    `
  }
}
