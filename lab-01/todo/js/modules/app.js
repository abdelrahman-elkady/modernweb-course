let App = {
  render(state) {
    return `
    <div id="appContainer" class="col">
      <header class="header row primary-bg-color">
        <h1 class="header__title">To Do App</h1>
      </header>

      <div class="row">
        ${TodoListList.render(state)}
        ${TodoList.render(state.todo_list_list[state.selectedList])}
      </div>
    </div>
    `
  }
}
