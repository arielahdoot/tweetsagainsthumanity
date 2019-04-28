module.exports = io => {
  io.on('connection', socket => {
    console.log(
      `A socket connection to the server has been made: ${socket.id}`
    );
    // socket.isJudge = Object.keys(io.sockets.sockets).length === 1;
    // console.log(socket.isJudge);
    socket.on('disconnect', () => {
      console.log(`Connection ${socket.id} has left the building`);
    });
  });
};
