module.exports = io => {
  io.on('connection', socket => {
    console.log(
      `A socket connection to the server has been made: ${socket.id}`
    );
    let socketList = Object.keys(io.sockets.sockets);
    if (socketList.length === 1) {
      io.to(`${socket.id}`).emit('judge');
    }

    io.emit('new player', socketList.length);

    socket.on('update black card server', data => {
      // console.log(data);
      socket.broadcast.emit('update black card', data);
    });

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`);
      const top = Object.keys(io.sockets.sockets)[0];
      if (top) {
        io.to(top).emit('open judge');
      }
    });
  });
};
