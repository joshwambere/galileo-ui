import React, { useEffect, useState } from 'react';
import { generateHSL } from '../../../shared/utils/avatar/AvatarColorUtil';
import { generateInitials } from '../../../shared/utils/avatar/avatarInitial.util';
import { AiOutlineMore } from 'react-icons/ai';
import { MessageInput } from '../ui/messageInput';
import { MessageList } from './MessageList';
import { ChatMessageItem } from '../cards/chatMessageItem';
import { useChatScroll } from '../../../hooks/scrollTop';
import { Room } from '../../../shared/types/chatRoom.types';
import { MessageTypes } from '../../../shared/types/message.types';
import { Info } from '../../chatRoom/Info';

type ChatRoomBoxTypes = {
  chatRoom: Room;
  chatRoomMessage: MessageTypes[];
};

export const ChaRoomBox = ({
  chatRoom,
  chatRoomMessage
}: ChatRoomBoxTypes): JSX.Element => {
  const [msgz, setMsgz] = useState(chatRoomMessage);
  useEffect(() => {
    setMsgz(chatRoomMessage);
  }, [chatRoomMessage]);

  const messageHandler = (newMessage: MessageTypes) => {
    setMsgz([...chatRoomMessage, newMessage]);
  };

  const boxRef: React.MutableRefObject<HTMLDivElement> = useChatScroll(msgz);
  return (
    <div className="messageBox grid grid-cols-8 h-screen">
      <div className=" messageBox-chat col-span-6 border-r-2 overflow-y-scroll overflow-y-visible relative ">
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
          {msgz &&
            msgz.map((item, index) => (
              <ChatMessageItem key={item._id! + index} message={item} />
            ))}
        </MessageList>

        <div className="inputMessage py-3 px-2 sticky left-0 right-0  bottom-0">
          <MessageInput room={chatRoom._id} createMessage={messageHandler} />
        </div>
      </div>
      <div className="roomDetail col-span-2 grid overflow-y-scroll">
        <Info chatRoom={chatRoom} />
      </div>
    </div>
  );
};
