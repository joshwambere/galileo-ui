import SocketIOClient from 'socket.io-client';
import { NEXT_PUBLIC_SOCKET_URL } from '../config/constants.config';

export const socketConnection = SocketIOClient(NEXT_PUBLIC_SOCKET_URL!, {
  path: '/socket.io',
  transports: ['websocket'],
  withCredentials: true,
});

socketConnection.on('connection', () => {
  console.log('Socket connected');
})
socketConnection.on('message:create', (data) => {
  console.log('Message created', data);
})
