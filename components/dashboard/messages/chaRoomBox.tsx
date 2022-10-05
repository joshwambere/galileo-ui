import React from 'react';
import { generateHSL } from '../../../shared/utils/avatar/AvatarColorUtil';
import { generateInitials } from '../../../shared/utils/avatar/avatarInitial.util';
import { ChatRoom } from '../../../shared/types/chatRoom.types';
import { AiOutlineMore } from 'react-icons/ai';
import { MessageInput } from '../ui/messageInput';
import { MessageList } from './MessageList';
import { ChatMessageItem } from '../cards/chatMessageItem';
import { MessageTypes } from '../../../shared/types/message.types';
import { useChatScroll } from '../../../hooks/scrollTop';

export const ChaRoomBox = ({ chatRoom, messages }: ChatRoom): JSX.Element => {
  const [chatRoomMessage, setChatRoomMessage] =
    React.useState<MessageTypes[]>(messages);

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
              style={{ background: generateHSL(chatRoom.id) }}
            >
              {generateInitials(chatRoom.name)}
            </div>
            <div className="room">
              <p className="m-0 px-2 font-bold text-[#000] text-xl">
                {chatRoom.name}
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
          <MessageInput createMessage={messageHandler} />
        </div>
      </>
    </div>
  );
};
