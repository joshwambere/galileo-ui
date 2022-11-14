import { MessageTypes } from '../../../shared/types/message.types';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { userResponse } from '../../../shared/types/user.types';
import { MessageType } from '../../../shared/utils/messages/MessageType.util';
import { AudioCard } from './AudioCard';
import { ImageCard } from './ImageCard';
import { BsCheck2All } from 'react-icons/bs';

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
        <ImageCard  source={message.message}  right={true}/>
      ) : message.message && MessageType(message.message) === 'TEXT' ? (
        <blockquote
          className={
            message && message.sender !== user._id
              ? 'speech-bubble'
              : 'speech-bubble-right'
          }
        >
          <div className="w-full message-wrapper">
            <div className="flex justify-between z-20 ">
              <span className="m-0 flex flex-wrap">{message.message}</span>
              {message && message.sender === user._id ? (
                <BsCheck2All className="mt-auto w-8" />
              ) : null}
            </div>
            <cite className="text-xs flex">
              <span className="font-light text-xs">
                {message && message.sender != user._id
                  ? message.senderName?.charAt(0).toUpperCase()! +
                    message.senderName?.slice(1) +
                    ' - ' +
                    moment(message.createdAt).format('LT')
                  : 'You' + ' - ' + moment(message.createdAt).format('LT')}
              </span>
            </cite>
          </div>
        </blockquote>
      ) : null}
    </div>
  );
};
