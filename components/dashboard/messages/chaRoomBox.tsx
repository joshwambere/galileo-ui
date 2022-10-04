import React from 'react';
import { generateHSL } from '../../../shared/utils/avatar/AvatarColorUtil';
import { generateInitials } from '../../../shared/utils/avatar/avatarInitial.util';
import { ChatRoom } from '../../../shared/types/chatRoom.types';
import { AiOutlineMore } from 'react-icons/ai';
import { MessageInput } from '../ui/messageInput';
import { MessageList } from './MessageList';

type Props = {
  chatRoom: ChatRoom;
  messageList: any;
};
export const ChaRoomBox = ({ messageList, chatRoom }: Props): JSX.Element => {
  return (
    <div className="messageBox w-full flex flex-col h-screen ">
      <div className="top-bar py-2 px-3 border-y-2 w-full flex items-center justify-between ">
        <div className="room flex items-center">
          <div
            className="Avatar"
            style={{ background: generateHSL(chatRoom.chatRoom.id) }}
          >
            {generateInitials(chatRoom.chatRoom.name)}
          </div>
          <div className="room">
            <p className="m-0 px-2 font-bold text-[#000] text-xl">
              {chatRoom.chatRoom.name}
            </p>
          </div>
        </div>
        <div className="more">
          <AiOutlineMore className="hover:bg-[#f9f9f9] cursor-pointer" />
        </div>
      </div>

      <div className="messageList flex-1">
        <MessageList data={messageList} />
      </div>

      <div className="inputMessage py-3 px-2 ">
        <MessageInput />
      </div>
    </div>
  );
};
