let state = {
  todo_list_list: [
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

renderHTML = newState => (document.body.innerHTML = App.render(newState));
renderHTML(state);

Observer.on('action', action => {
  let selectedList = state.todo_list_list[state.selectedList];

  switch (action.type) {
    case 'ADD_ITEM':
      selectedList.items.push(action.item);
      break;

    case 'REMOVE_ITEM':
      selectedList.items.splice(action.index, 1);
      break;

    case 'ADD_LIST':
      let newList = {
        title: action.title,
        items: []
      };
      state.todo_list_list.push(newList);
      state.selectedList = state.todo_list_list.length - 1;
      break;

    case 'REMOVE_LIST':
      state.todo_list_list.splice(action.index, 1);
      state.selectedList = 0;

      break;

    case 'SELECT_LIST':
      state.selectedList = action.index;
      break;
  }

  renderHTML(state)
});
