import io from 'socket.io-client';

const socket = io('localhost:1337');
export default socket;
