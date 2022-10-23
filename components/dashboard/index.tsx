import { SideMenu } from './ui/sideMenu';
import { MessageMenu } from './ui/MessageMenu';
import { ChaRoomBox } from './messages/chaRoomBox';
import { ChatRoom, Room } from "../../shared/types/chatRoom.types";
import { useContext, useEffect, useState } from "react";
import { MessageCard } from './cards/MessageCard';
import { SocketContext } from '../../contexts/socket.context';
import { socketConnection } from '../../helpers/Socket.helper';
import { useChatRoomsQuery } from "../../services/endpoints/chatRoom.endpoint";
import Image from 'next/image';
import EmptyImage from '../../public/assets/images/empty.png';
const mock = [
  {
    chatRoom: {
      _id: '1',
      name: 'New ChatRoom'
    },
    messages: [
      {
        id: '1',
        text: 'Hello',
        user: 'johnson',
        type: 'text',
        date: new Date()
      },
      {
        id: '3',
        text: 'Hello',
        user: '',
        type: 'text',
        date: new Date()
      }
    ],
    members: ['dsds']
  },
  {
    chatRoom: {
      _id: '22',
      name: 'Solo Tech'
    },
    messages: [
      {
        id: '1',
        text: "It's working here",
        user: 'johnson',
        type: 'text',
        date: new Date()
      }
    ],
    members: ['dsds']
  }
];
export const Dashboard = (): JSX.Element => {

  const { data: chatRooms, isLoading: todosLoading, isFetching: Fetching } = useChatRoomsQuery()
  !Fetching && console.log(chatRooms)
  const [activeRoom, setActiveRoom] = useState<string>(mock[0].chatRoom._id!);
  const socket = useContext(SocketContext);

  const activeRoomHandler = (room: Room) => {
    socket.emit('join:room', {
      id: room._id,
      sender: 'johnson',
      chatRoom: 'dummy'
    });
    socket.emit('join:room', {sender: 'johnson', chatRoom: room._id});
    setActiveRoom(room._id);
  };
  useEffect(() => {
    socket.emit('join:room', {sender: 'johnson', chatRoom: mock[0].chatRoom});
  })
  const room = chatRooms?.data.filter(room => room._id === activeRoom);
  return (
    <SocketContext.Provider value={socketConnection}>
      <div className="h-screen flex flex-row">
        <SideMenu />

        <MessageMenu>
          {chatRooms&& chatRooms.data.length>0? chatRooms.data.map(room => (
            <MessageCard
              chatRoom={room}
              activeRoomHandler={activeRoomHandler}
              key={room._id}
            />
          )):
            <Image src={EmptyImage} alt="empty" className="emptyImages" />
          }

        </MessageMenu>

        {room&& room.map(room => (
          <ChaRoomBox
            chatRoom={room}
            key={room._id}
          />
          ))

        }
      </div>
    </SocketContext.Provider>
  );
};
