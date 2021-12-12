const http = require('http');
const io = require('socket.io');
const connectedClients = {};

let httpListener;
let ioListener;

const startHttpListener = (app) => {
  httpListener = http.Server(app);
  return httpListener;

}

const getIO = () => {

  if (!httpListener) {
    console.log('we have a problem');
  }
  if (!ioListener) {
    ioListener = io(httpListener)
  }
  return ioListener;
}

const startWebSocketListener = (app) => {
  console.log('starting web socket server ...');
  startHttpListener(app);

  getIO().on('connection', (socket) => {
    console.log('User connected...', socket.id, connectedClients, new Date());

    socket.on('disconnect', () => {
      console.log('Disconnected ..', socket.id);
      console.log(connectedClients);
      for (const userId in connectedClients) {
        if (connectedClients[userId].socket === socket.id) {
          delete connectedClients[userId];
          break;
        }
      }

    });

    let i = 1;
    socket.on('add-user', (data) => {

      console.log('message:', data);
      const userId = parseInt(data.userId) + i;
      connectedClients[data.userId] = {
        socket: socket.id
      }
      i++;
      console.log(connectedClients);
      // socket.broadcast.emit('hi');

    })
  })

  httpListener.listen(6000, () => {
    console.log('Listening on *:6000');

  });
}

setInterval(() => {
  // console.log(connectedClients['11223345'].socket);
  const socketId = connectedClients['11223344'] && connectedClients['11223344'].socket;
  console.log(socketId);
  // console.log('connected:::', io.sockets.clients());
  // io.sockets.connected[socketId]
  //   .emit('order-update', { action: 'update', status: 'Processing' });
  // io.emit('remote-ops', 'msg:' + new Date().toISOString());
  socketId && getIO().to(socketId).emit("order-update", { action: 'update', status: 'Processing', time: new Date() });
  console.log('sent a message');
}, 10000);

module.exports = {
  getIO, startWebSocketListener, connectedClients
}