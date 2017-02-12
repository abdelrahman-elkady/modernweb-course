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
  ]
}

document.body.innerHTML = App.render(state)
