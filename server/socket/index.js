module.exports = io => {
  io.on('connection', socket => {
    console.log(
      `A socket connection to the server has been made: ${socket.id}`
    );
    let socketList = Object.keys(io.sockets.sockets);
    if (socketList.length === 1) {
      io.to(`${socket.id}`).emit('judge');
    }

    io.on('claimed judge', () => {
      console.log('freeeeeeee');
    });

    socket.on('disconnect', () => {
      // socket.broadcast.emit('free judge');
      console.log(`Connection ${socket.id} has left the building`);
      const top = Object.keys(io.sockets.sockets)[0];
      if (top) {
        io.to(top).emit('open judge');
      }
    });
  });
};
