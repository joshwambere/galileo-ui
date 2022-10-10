import { MessageTypes } from './message.types';

export interface ChatRoom {
  chatRoom: {
    id: string;
    name: string;
  };
  messages: MessageTypes[];
  members: Object[];
}
export interface Room{
  _id: string;
  name: string;
  project: string;
  status: string;
  __v: number;
}


export interface ChatRoomResponse {
  data: Room;
  message: string;
}

export interface ChatRoomsResponse {
  data: Room[];
  message: string;
}

export interface ChatRoomRequest {
  projectId: string;
}
