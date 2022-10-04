import { SideMenu } from './ui/sideMenu';
import { MessageMenu } from './ui/MessageMenu';
import { ChaRoomBox } from './messages/chaRoomBox';
const mock = {
  chatRoom: {
    id: '1',
    name: 'Amali tech'
  },
  messages: ['dsds'],
  members: ['dsds']
};
export const Dashboard = (): JSX.Element => {
  return (
    <div className="flex flex-row">
      <SideMenu />
      <MessageMenu charRooms={[mock]} />
      <ChaRoomBox chatRoom={mock} messageList={mock.messages} />
    </div>
  );
};
