import { MessageTypes } from './message.types';

export interface ChatRoom {
  chatRoom: {
    id: string;
    name: string;
  };
  messages: MessageTypes[];
  members: Object[];
}
