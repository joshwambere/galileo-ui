import { BsMicFill } from 'react-icons/bs';
import React, { useContext, useState } from 'react';
import { IoIosAttach, IoMdSend } from 'react-icons/io';
import { IoImageOutline } from 'react-icons/io5';

import { SocketContext } from '../../../contexts/socket.context';
import { MessageTypes } from '../../../shared/types/message.types';
import { userResponse } from '../../../shared/types/user.types';
import { useSelector } from 'react-redux';
import { audioRecorder } from '../../../helpers/audioRecorder.helper';
import { uploadAudio } from '../../../helpers/cloudinary.upload.helper';

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
  const profileInputRef = React.useRef<HTMLInputElement>(null);

  const start = () => {
    audioRecorder.startRecording().then(_res => {
      setIsRecording(true);
    });
  };

  const stop = () => {
    audioRecorder.stopRecording().then(_res => {
      setIsRecording(false);
      uploadAudio(audioRecorder.audioBlob[0]).then(res => {
        if (res) {
          sendAudioMedia(res, 'audio');
        }
      });
    });
  };

  const send = (e?: any) => {
    if (e.key === 'Enter' || e.type === 'click') {
      data = {
        chatRoom: room,
        message: inputRef.current?.value!,
        messageType: 'text',
        sender: user && user._id,
        status: 'SENT',
        createdAt: new Date(),
        senderName: user && user.userName ? user.userName : ''
      };
      socket.emit('message:create', data);

      createMessage(data);

      (inputRef.current as HTMLTextAreaElement).value = '';
      inputRef.current?.focus();
    }
  };
  const uploadImage = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadAudio(new Blob([reader.result!])).then(res => {
        if (res) {
          sendAudioMedia(res, 'image');
        }
      });
    };
  };

  const sendAudioMedia = (cloudinary_url: string, type: string) => {
    const message = {
      chatRoom: room,
      message: cloudinary_url,
      messageType: type === 'audio' ? 'AUDIO' : 'IMAGE',
      sender: user._id,
      status: 'SENT',
      createdAt: new Date()
    };
    socket.emit('message:create', message);

    createMessage(message);
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
          {!isRecording ? (
            <BsMicFill
              className="text-[#6f7074] mr-2 hover:cursor-pointer"
              size={18}
              onClick={start}
            />
          ) : (
            <BsMicFill
              className=" text-[#d51f97] mr-2 hover:cursor-pointer"
              size={18}
              onClick={stop}
            />
          )}

          <IoIosAttach
            className="text-[#6f7074] mr-2 hover:cursor-pointer"
            size={18}
          />

          <label className="upload-image-chat relative">
            <input
              ref={profileInputRef}
              type="file"
              name="profile"
              accept="image/png, image/gif, image/jpeg"
              className="upload-image"
              onChange={e => uploadImage(e)}
            />
            <IoImageOutline
              className="text-[#6f7074] mr-2 hover:cursor-pointer"
              size={18}
            />
          </label>

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
