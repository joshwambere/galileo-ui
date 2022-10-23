export interface MessageTypes{
  text: string;
  type: string;
  date: Date;
  user?: string;
}

export interface CreateMessage{
  type: string;
  data: MessageDto;
}

export interface MessageDto{
  chatRoom: string;
  message: string;
  messageType: string;
  sender: string;
  status: string;
  createdAt: Date;
}




