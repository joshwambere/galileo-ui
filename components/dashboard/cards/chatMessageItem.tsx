import { MessageTypes } from '../../../shared/types/message.types';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { userResponse } from '../../../shared/types/user.types';

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
      <blockquote
        className={
          message && message.sender !== user._id
            ? 'speech-bubble'
            : 'speech-bubble-right'
        }
      >
        <>
          <p>{message.message}</p>
          <cite>
            {message.sender !== user._id
              ? 'Dev'
              : moment(message.createdAt).format('LT')}{' '}
            -{' '}
            <span>{message.sender != user._id ? message.sender : 'You'}</span>
          </cite>
        </>
      </blockquote>
    </div>
  );
};
