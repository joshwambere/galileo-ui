import { SideMenu } from '../dashboard/ui/sideMenu';
import React, { useEffect } from 'react';
import { useLazyChatRoomsQuery } from '../../services/endpoints/chatRoom.endpoint';
import { ErrorMessage } from '../shared/messages/ErrorMessage';
import { useRouter } from 'next/router';

import ChatRoomCard from './cards/chatRoomCard';

const ChatRoom = (): JSX.Element => {
  const [chatRooms, { data: rooms, isSuccess: roomsSuccess }] =
    useLazyChatRoomsQuery();

  const router = useRouter();
  useEffect(() => {
    chatRooms()
      .unwrap()
      .then(_res => {})
      .catch(err => {
        ErrorMessage('something went wrong');
      });
  }, []);
  const _activateRoom = (id: string) => {
    router.replace(`/?room=${id}`);
  };
  return (
    <div className="flex  m-2">
      <div className="sticky top-0">
        <SideMenu />
      </div>
      <div>
        {rooms &&
          rooms.data.map(room => (
            <div
              className="mx-2"
              key={room._id}
              onClick={() => _activateRoom(room._id)}
            >
              <ChatRoomCard room={room} key={room._id} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ChatRoom;
