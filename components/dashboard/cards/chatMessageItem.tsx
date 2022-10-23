import { MessageTypes } from '../../../shared/types/message.types';
import moment from 'moment';

type Props = {
  message: MessageTypes;
};
export const ChatMessageItem = ({ message }: Props): JSX.Element => {
  return (
    <div className={message && message.user ? 'right-placed' : 'left-placed'}>
      <blockquote
        className={
          message && message.user ? 'speech-bubble' : 'speech-bubble-right'
        }
      >
        <>
          <p>{message.text}</p>
          <cite>
            {message.user ? 'Dev' : moment(message.date).format('LT')} -{' '}
            <span>{message.user ? message.user : 'You'}</span>
          </cite>
        </>
      </blockquote>
    </div>
  );
};
