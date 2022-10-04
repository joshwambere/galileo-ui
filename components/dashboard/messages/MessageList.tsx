import { ChatMessageItem } from '../cards/chatMessageItem';

export const MessageList = ({ messageList }: any): JSX.Element => {
  return (
    <>
      <div className="messageList">
        <ChatMessageItem message={messageList} />
      </div>
    </>
  );
};
