import { SideMenu } from './ui/sideMenu';
import { MessageMenu } from './ui/MessageMenu';
import { ChaRoomBox } from './messages/chaRoomBox';
import { ChatRoom } from '../../shared/types/chatRoom.types';
import { useState } from 'react';
import { MessageCard } from './cards/MessageCard';

const mock = [
  {
    chatRoom: {
      id: '1',
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
      id: '22',
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
  const [activeRoom, setActiveRoom] = useState<string>(mock[0].chatRoom.id);

  const activeRoomHandler = (room: ChatRoom) => {
    setActiveRoom(room.chatRoom.id);
  };
  const room = mock.filter(room => room.chatRoom.id === activeRoom);
  return (
    <div className="h-screen flex flex-row">
      <SideMenu />

      <MessageMenu>
        {mock.map(room => (
          <MessageCard
            chatRoom={room}
            activeRoomHandler={activeRoomHandler}
            key={room.chatRoom.id}
          />
        ))}
      </MessageMenu>

      {room.map(room => (
        <ChaRoomBox
          chatRoom={room.chatRoom}
          messages={room.messages}
          members={room.members}
          key={room.chatRoom.id}
        />
      ))}
    </div>
  );
};
