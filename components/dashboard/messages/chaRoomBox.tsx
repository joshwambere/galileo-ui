import React, { useContext } from "react";
import { generateHSL } from '../../../shared/utils/avatar/AvatarColorUtil';
import { generateInitials } from '../../../shared/utils/avatar/avatarInitial.util';
import { AiOutlineMore } from 'react-icons/ai';
import { MessageInput } from '../ui/messageInput';
import { MessageList } from './MessageList';
import { ChatMessageItem } from '../cards/chatMessageItem';
import { MessageTypes } from '../../../shared/types/message.types';
import { useChatScroll } from '../../../hooks/scrollTop';
import { SocketContext } from "../../../contexts/socket.context";
import {  useChatMessagesQuery } from "../../../services/endpoints/chatRoom.endpoint";


export const ChaRoomBox = ({ chatRoom }: any): JSX.Element => {

  const { data: room, isLoading: todosLoading } = useChatMessagesQuery({chatRoomId: chatRoom._id})
  const [chatRoomMessage, setChatRoomMessage] =
    React.useState<MessageTypes[]>(room?.data.messages || []);
  const [message, setMessage] = React.useState<any>('');

  const socket = useContext(SocketContext);
  socket.on('message', (data: any) => {
    setChatRoomMessage([...chatRoomMessage, data.message]);
  })
  const messageHandler = (newMessage: MessageTypes) => {
    setChatRoomMessage([...chatRoomMessage, newMessage]);
  };
  const boxRef: React.MutableRefObject<HTMLDivElement> =
    useChatScroll(chatRoomMessage);
  return (
    <div className="messageBox w-full flex flex-col h-screen ">
      <>
        <div className="top-bar py-2 px-3 border-y-2 w-full flex items-center justify-between ">
          <div className="room flex items-center">
            <div
              className="Avatar"
              style={{ background: chatRoom && generateHSL(chatRoom._id) }}
            >
              {chatRoom && generateInitials(chatRoom.name)}
            </div>
            <div className="room">
              <p className="m-0 px-2 font-bold text-[#000] text-xl">
                {chatRoom && chatRoom.name}
              </p>
            </div>
          </div>
          <div className="more">
            <AiOutlineMore className="hover:bg-[#f9f9f9] cursor-pointer" />
          </div>
        </div>

        <MessageList ref={boxRef}>
          {chatRoomMessage.map((item, index) => (
            <ChatMessageItem key={index} message={item} />
          ))}
        </MessageList>

        <div className="inputMessage py-3 px-2 ">
          <MessageInput chatRoomMessage={chatRoomMessage}  createMessage={messageHandler} />
        </div>
      </>
    </div>
  );
};
