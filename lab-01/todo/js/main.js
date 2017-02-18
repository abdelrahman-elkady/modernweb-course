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

  switch (action.type) {
    case 'ADD_ITEM':
      let selectedList = state.todo_list_list[state.selectedList];
      selectedList.items.push(action.item);
      break;
  }

  renderHTML(state)
});
