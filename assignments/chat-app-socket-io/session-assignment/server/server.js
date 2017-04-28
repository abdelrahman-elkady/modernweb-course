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
    state.connectedUsers.push(user);

    socket.emit('user list', {users: state.connectedUsers});
  });


  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg) {
    io.emit('chat message', msg);
    console.log('message: ' + msg);
  });

});

http.listen(1337, function() {
  console.log('listening on *:1337');
});
