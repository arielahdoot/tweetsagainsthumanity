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

    socket.on('victory server', (data, judgeSocketId) => {
      console.log('HERE');
      const owner = data.owner;
      io.to(owner).emit('victory');
      io.to(owner).emit('judge');
      io.to(judgeSocketId).emit('no longer judge');
      io.emit('new round');
      io.emit('get new card');
    });

    socket.on('update black card server', data => {
      // console.log(data);
      socket.broadcast.emit('update black card', data);
    });

    socket.on('card submitted server', data => {
      socket.broadcast.emit('card submitted', data);
    });

    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`);
      io.sockets.emit('player left');
      const top = Object.keys(io.sockets.sockets)[0];
      if (top) {
        io.to(top).emit('open judge');
      }
    });
  });
};
