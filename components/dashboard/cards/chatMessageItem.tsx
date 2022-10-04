import { MessageTypes } from '../../../shared/types/message.types';

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
        <p>When will Apple release a MacBook Air 15 with Retina?</p>
        <cite>
          John Doe - <span>Developer</span>
        </cite>
      </blockquote>
    </div>
  );
};
