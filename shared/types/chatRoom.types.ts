import { MessageTypes } from './message.types';

export interface ChatRoom {
  chatRoom: {
    _id: string;
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
  description: string;
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

export interface ChatRoomMessageResponse {
 data: ChatRoom;
  message: string;
}

export interface ChatRoomMessageRequest {
  chatRoomId: string;
}
