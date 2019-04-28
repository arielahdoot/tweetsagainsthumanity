import io from 'socket.io-client';

// Never seen window.location before?
// This object describes the URL of the page we're on!
const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('Connected!');
  console.log(socket.id);
});

export default socket;
