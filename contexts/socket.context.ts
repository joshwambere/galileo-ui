import { socketConnection } from '../helpers/Socket.helper';
import React from 'react';

export const SocketContext = React.createContext(socketConnection);
