import { BsMic, BsMicFill } from 'react-icons/bs';
import { useState } from 'react';
import { IoIosAttach, IoMdSend } from 'react-icons/io';
import { IoImageOutline } from 'react-icons/io5';

export const MessageInput = (): JSX.Element => {
  const [isRecording, setIsRecording] = useState(false);
  return (
    <>
      <div className="message-input flex items-center justify-between px-4 py-2  border-2 rounded-xl">
        <textarea
          placeholder="Enter message"
          className="bg-transparent outline-none flex-1"
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
          />
        </div>
      </div>
    </>
  );
};
