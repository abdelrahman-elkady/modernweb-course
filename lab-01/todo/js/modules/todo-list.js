let TodoList = {
  render(todoList) {
    return `

    <main class="col f-3">
      <div class="row create-todo">
        <input type="text" class="create-todo__input" placeholder="Enter New To Do">
        <button type="button" class="create-todo__submit-btn secondary-bg-color ">+</button>
      </div>
      <ul class="todo-list col">
        ${TodoItem.render(todoList.items)}
      </ul>
    </main>

    `
  }
}
