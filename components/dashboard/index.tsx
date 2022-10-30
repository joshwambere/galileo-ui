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
import { userResponse } from '../../shared/types/user.types';
import { MessageTypes } from '../../shared/types/message.types';

export const Dashboard = (): JSX.Element => {
  const [chatRooms, { data: rooms, isSuccess: roomsSuccess }] =
    useLazyChatRoomsQuery();

  const [activeRoom, setActiveRoom] = useState<string | null>(null);
  const [messages, setMessages] = React.useState<MessageTypes[]>([]);
  useEffect(() => {
    chatRooms()
      .unwrap()
      .then(res => {
        setActiveRoom(res.data[0]._id);
      })
      .catch(err => {});
  }, [chatRooms]);
  const socket = useContext(SocketContext);
  const user = useSelector((state: any) => state.auth.user);

  const localUser = JSON.parse(localStorage.getItem('_galileo_usr') || '{}');
  socket.on('message:prev', (data: any) => {
    setMessages(data.message);
  });

  const activeRoomHandler = (room: Room) => {
    socket.emit('join:room', {
      sender: (user && user.userName) || (localUser && localUser.userName),
      chatRoom: activeRoom,
      user_id: (user && user._id) || (localUser && localUser._id)
    });
    setActiveRoom(room._id);
  };

  useEffect(() => {
    const initialUser = typeof user === 'string' ? JSON.parse(user) : user;
    const initialLocalUser =
      typeof localUser === 'string' ? JSON.parse(localUser) : localUser;
    console.log(typeof initialUser, initialLocalUser);
    if (activeRoom !== null && user) {
      socket.emit('join:room', {
        sender: initialUser && initialUser.userName,
        chatRoom: activeRoom,
        user_id: initialLocalUser && initialLocalUser._id
      });
    }
  }, [activeRoom, user]);
  const room = rooms?.data.filter(room => room._id === activeRoom);
  return (
    <SocketContext.Provider value={socketConnection}>
      <div className="h-screen flex flex-row">
        <SideMenu />

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

        {room &&
          room.map(room => (
            <ChaRoomBox
              chatRoomMessage={messages}
              chatRoom={room}
              key={room._id}
            />
          ))}
      </div>
    </SocketContext.Provider>
  );
};
