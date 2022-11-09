import { SideMenu } from './ui/sideMenu';
import { MessageMenu } from './ui/MessageMenu';
import { ChaRoomBox } from './messages/chaRoomBox';
import { Room } from '../../shared/types/chatRoom.types';
import React, { useContext, useEffect, useState } from 'react';
import { MessageCard } from './cards/MessageCard';
import { SocketContext } from '../../contexts/socket.context';
import { socketConnection } from '../../helpers/Socket.helper';
import { useLazyChatRoomsQuery } from '../../services/endpoints/chatRoom.endpoint';
import Image from 'next/image';
import EmptyImage from '../../public/assets/images/empty.png';
import { useSelector } from 'react-redux';
import { MessageTypes } from '../../shared/types/message.types';
import { useRouter } from 'next/router';

export const Dashboard = (): JSX.Element => {
  const [chatRooms, { data: rooms, isSuccess: roomsSuccess }] =
    useLazyChatRoomsQuery();

  const [activeRoom, setActiveRoom] = useState<string | null>(null);
  const [messages, setMessages] = React.useState<MessageTypes[]>([]);
  const queryRoom = useRouter().query.room;
  useEffect(() => {
    chatRooms()
      .unwrap()
      .then(res => {
        const activate: string = queryRoom
          ? queryRoom.toString()
          : res.data[0]._id;
        setActiveRoom(activate);
      })
      .catch(err => {});
  }, [chatRooms]);
  const socket = useContext(SocketContext);
  const user = useSelector((state: any) => state.auth.user);

  const localUser = JSON.parse(localStorage.getItem('_galileo_usr') || '{}');
  socket.on('message:prev', (data: any) => {
    setMessages(data.messages);
  });

  const activeRoomHandler = (room: Room) => {
    setActiveRoom(room._id);
  };

  const room = rooms?.data.filter(room => room._id === activeRoom);

  useEffect(() => {
    const initialUser = typeof user === 'string' ? JSON.parse(user) : user;
    const initialLocalUser =
      typeof localUser === 'string' ? JSON.parse(localUser) : localUser;
    if (activeRoom !== null && user) {
      socket.emit('join:room', {
        sender: initialUser && initialUser.userName,
        chatRoom: activeRoom,
        user_id: initialLocalUser && initialLocalUser._id
      });
      socket.emit('users:online', { id: activeRoom });
    }
  }, [activeRoom]);

  return (
    <SocketContext.Provider value={socketConnection}>
      <div className="h-screen flex">
        <div className="sticky top-0">
          <SideMenu />
        </div>

        <div className="sticky top-0 h-screen w-1/5">
          <MessageMenu>
            {rooms && rooms.data.length > 0 ? (
              rooms.data.map(room => (
                <MessageCard
                  chatRoom={room}
                  activeRoomHandler={activeRoomHandler}
                  key={room._id}
                />
              ))
            ) : (
              <Image src={EmptyImage} alt="empty" className="emptyImages" />
            )}
          </MessageMenu>
        </div>

        <div className="h-screen flex-1">
          {room &&
            room.map(room => (
              <ChaRoomBox
                chatRoomMessage={messages}
                chatRoom={room}
                key={room._id}
              />
            ))}
        </div>
      </div>
    </SocketContext.Provider>
  );
};
