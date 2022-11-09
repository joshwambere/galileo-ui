import ChatRoom from '../../components/chatRoom/ChatRoom';
import WithPrivateRoute from '../../components/wrappers/PrivateRoutes';

const chatroom = (): JSX.Element => {
  return (
    <div>
      <ChatRoom />
    </div>
  );
};

export default WithPrivateRoute(chatroom);
