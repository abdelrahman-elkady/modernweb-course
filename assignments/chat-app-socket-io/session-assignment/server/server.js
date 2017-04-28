const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const _ = require('lodash');

// No db here, let's fake some state
let state = {
  connectedUsers: []
}

app.get('/', function(req, res) {
  res.json({message: 'I am alive !'});
});

io.on('connection', function(socket) {
  console.log('a user connected');


  socket.on('init', function(user) {
    state.connectedUsers.push(_.extend(user, {socketId: socket.id}));
    io.emit('user list', state.connectedUsers);
  });


  socket.on('disconnect', function() {
    console.log('user disconnected');

    state.connectedUsers = _.pull(state.connectedUsers,
      _.find(state.connectedUsers, user => user.socketId === socket.id)
    );

    io.emit('user list', state.connectedUsers);
  });

  socket.on('chat message', function(msg) {
    let user = _.find(state.connectedUsers, user => user.socketId === socket.id);
    io.emit('chat message', {msg: msg, user});
  });

});

http.listen(1337, function() {
  console.log('listening on *:1337');
});
