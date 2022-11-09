export interface MessageTypes {
  _id?: string;
  chatRoom: string;
  message: string;
  messageType: string;
  sender: string;
  status: string;
  createdAt: Date;
  senderName?: string;
}

export interface CreateMessage {
  type: string;
  data: MessageDto;
}

export interface MessageDto {
  chatRoom: string;
  message: string;
  messageType: string;
  sender: string;
  status: string;
  createdAt: Date;
}
