const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());
app.use(morgan('dev'));

const connectedClients = {};

io.on('connection', (socket) => {
  console.log('User connected...', socket.id, new Date());

  socket.on('disconnect', () => {
    console.log('Disconnected ..');
  });
  let i = 1;
  socket.on('add-user', (data) => {

    console.log('message:', data);
    const userId = parseInt(data.userId) + i;
    connectedClients[userId] = {
      socket: socket.id
    }
    i++;
    console.log(connectedClients);
    // socket.broadcast.emit('hi');

  })
})

setInterval(() => {
  console.log(connectedClients['11223345'].socket);
  const socketId = connectedClients['11223345'].socket;
  console.log(socketId);
  // console.log('connected:::', io.sockets.clients());
  // io.sockets.connected[socketId]
  //   .emit('order-update', { action: 'update', status: 'Processing' });
  // io.emit('remote-ops', 'msg:' + new Date().toISOString());
  io.to(socketId).emit("order-update", { action: 'update', status: 'Processing', time: new Date() });
  console.log('sent a message');
}, 10000);

app.get('/hello', (req, res) => {
  res.send('Hello there !!');
})

http.listen(6000, () => {
  console.log('Listening on *:6000');
});
