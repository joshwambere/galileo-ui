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
import MainLoader from '../shared/loaders/MainLoader';
import { Steps } from 'intro.js-react';
import { STEPS, STEPS_USER } from '../../config/constants.config';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { RootState } from '../../shared/redux/store';
import { token } from '../../shared/types/token.types';
import { useChatScroll } from '../../hooks/scrollTop';

export const Dashboard = (): JSX.Element => {
  const [
    chatRooms,
    { data: rooms, isSuccess: roomsSuccess, isLoading: Loading }
  ] = useLazyChatRoomsQuery();
  const user = useSelector((state: any) => state.auth.user);
  const [activeRoom, setActiveRoom] = useState<string | null>(null);
  const [messages, setMessages] = React.useState<MessageTypes[]>([]);

  const token = useSelector((state: RootState) => state.auth.token);
  const localToken = localStorage.getItem('_galileo_tkn');
  const decodedToken: any = jwt.decode(token ? token! : localToken!);
  const { lastLogin, role } = decodedToken as JwtPayload & token;
  const [enableIntro, setEnableIntro] = React.useState<boolean>(
    !(lastLogin && lastLogin)
  );

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

  const localUser = JSON.parse(localStorage.getItem('_galileo_usr') || '{}');

  useEffect(() => {
    socket.on('message', (data: any) => {
      setMessages(prev => [...prev, data]);
    });

    socket.on('message:prev', (data: any) => {
      setMessages(data.messages);
    });
  }, [socket]);

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
  const boxRef: React.MutableRefObject<HTMLDivElement> =
    useChatScroll(messages);

  return (
    <SocketContext.Provider value={socketConnection}>
      <div className="dashboard-cont h-screen flex relative overflow-auto">
        <Steps
          enabled={enableIntro}
          steps={role == 'PM' ? STEPS : STEPS_USER}
          initialStep={0}
          onExit={() => setEnableIntro(false)}
        />
        {Loading ? <MainLoader /> : null}
        <div className="sticky top-0 dashboard-sidemenu">
          <SideMenu />
        </div>

        <div className="flex w-full">
          <div className="sticky top-0 h-screen w-1/5 message-menu">
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
                  boxRef={boxRef}
                />
              ))}
          </div>
        </div>
      </div>
    </SocketContext.Provider>
  );
};
