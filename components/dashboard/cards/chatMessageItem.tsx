import { MessageTypes } from '../../../shared/types/message.types';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { userResponse } from '../../../shared/types/user.types';
import { MessageType } from '../../../shared/utils/messages/MessageType.util';
import { AudioCard } from './AudioCard';
import { ImageCard } from './ImageCard';

type Props = {
  message: MessageTypes;
};
export const ChatMessageItem = ({ message }: Props): JSX.Element => {
  const user: userResponse = useSelector((state: any) => state.auth.user);

  return (
    <div
      className={
        message && message.sender !== user._id ? 'right-placed' : 'left-placed'
      }
    >
      {message.message && MessageType(message.message) === 'AUDIO' ? (
        <AudioCard
          audio={message.message}
          right={true}
          message={message}
          user={user}
        />
      ) : message.message && MessageType(message.message) === 'IMAGE' ? (
        <ImageCard source={message.message} />
      ) : message.message && MessageType(message.message) === 'TEXT' ? (
        <blockquote
          className={
            message && message.sender !== user._id
              ? 'speech-bubble'
              : 'speech-bubble-right'
          }
        >
          <>
            <p className="m-0">{message.message}</p>
            <cite>
              {message.sender !== user._id
                ? 'Dev'
                : moment(message.createdAt).format('LT')}{' '}
              -{' '}
              <span>{message.sender != user._id ? message.sender : 'You'}</span>
            </cite>
          </>
        </blockquote>
      ) : null}
    </div>
  );
};
