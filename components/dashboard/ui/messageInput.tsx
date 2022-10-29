import { BsMic, BsMicFill } from 'react-icons/bs';
import React, { useContext, useState } from 'react';
import { IoIosAttach, IoMdSend } from 'react-icons/io';
import { IoImageOutline } from 'react-icons/io5';

import { SocketContext } from '../../../contexts/socket.context';
import { MessageTypes } from '../../../shared/types/message.types';
import { userResponse } from '../../../shared/types/user.types';
import { useSelector } from 'react-redux';

type MessageInputTypes = {
  createMessage: any;
  room: string;
};

export const MessageInput = ({
  createMessage,
  room
}: MessageInputTypes): JSX.Element => {
  const [isRecording, setIsRecording] = useState(false);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const socket = useContext(SocketContext);
  const user: userResponse = useSelector((state: any) => state.auth.user);
  let data: MessageTypes;
  const send = (e?: any) => {
    if (e.key === 'Enter' || e.type === 'click') {
      data = {
        chatRoom: room,
        message: inputRef.current?.value!,
        messageType: 'text',
        sender: user._id,
        status: 'SENT',
        createdAt: new Date()
      };
      socket.emit('message:create', data);

      createMessage(data);

      (inputRef.current as HTMLTextAreaElement).value = '';
      inputRef.current?.focus();
    }
  };
  return (
    <>
      <div className="message-input flex items-center justify-between px-4 py-2  border-2 rounded-xl">
        <textarea
          ref={inputRef}
          placeholder="Enter message"
          className="bg-transparent outline-none flex-1"
          onKeyDown={e => send(e)}
        />
        <div className="icons flex items-center">
          {isRecording ? (
            <BsMicFill
              className="text-[#d51f97] mr-2 hover:cursor-pointer"
              size={18}
              onClick={() => setIsRecording(!isRecording)}
            />
          ) : (
            <BsMic
              className="text-[#6f7074] mr-2 hover:cursor-pointer"
              size={18}
              onClick={() => setIsRecording(!isRecording)}
            />
          )}
          <IoIosAttach
            className="text-[#6f7074] mr-2 hover:cursor-pointer"
            size={18}
          />
          <IoImageOutline
            className="text-[#6f7074] mr-2 hover:cursor-pointer"
            size={18}
          />
          <IoMdSend
            className="ml-2 text-[#d51f97] mr-2 hover:cursor-pointer"
            size={26}
            onClick={e => send(e)}
          />
        </div>
      </div>
    </>
  );
};
